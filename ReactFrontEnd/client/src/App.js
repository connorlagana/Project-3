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
<<<<<<< HEAD
import Register from "./components/Register"
=======
import Register from "./components/Register";
>>>>>>> b7e203de3155181a69f5ba914a8ad62af17ac6a8

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
        <Header />
        <Route
          exact
          path="/"
          render={() => <Login handleLogin={this.handleLogin} />}
        />
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
