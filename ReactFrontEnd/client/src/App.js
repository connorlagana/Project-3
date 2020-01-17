import React, { Component } from "react";
import "./App.css";
import { loginUser, registerUser, verifyUser } from "./services/api_helper";
import { Route } from "react-router-dom";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import CreatePost from "./components/CreatePost";
import Profile from "./components/Profile/Profile.js";
import AllPosts from "./components/AllPosts.js";
import SinglePost from "./components/singlePost";
import UpdatePost from "./components/UpdatePost.js";
import Register from "./components/Register"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      errorText: ""
    };
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      this.setState({
        errorText: "You must supply a username AND password"
      });
    } else {
      const currentUser = await loginUser(loginData);
      this.setState({
        currentUser
      });
    }
  };

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    if (!registerData.username || !registerData.password) {
      this.setState({
        errorText: "You must supply a username AND password"
      });
    } else {
      const currentUser = await registerUser(registerData);
      this.setState({
        currentUser
      });
    }
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      });
    }
  };
  handleLogout = () => {
    this.setState({
      currentUser: null
    });
    localStorage.removeItem("authToken");
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Login handleLogin={this.handleLogin}/>} />
        <Route
          exact
          path="/home"
          render={() => <AllPosts currentUser={this.state.currentUser} />}
        />
        <Route
          exact
          path="/register"
          render={() => <Register handleRegister={this.handleRegister} />}
        />        
        <Route exact path="/singlepost/:id" component={SinglePost} />
        <Route exact path="/createPost" render={() => <CreatePost />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/updatePost/:id" component={UpdatePost} />
      </div>
    );
  }
}

export default App;
