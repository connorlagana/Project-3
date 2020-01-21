import React, { Component } from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

// API Calls
import { loginUser, registerUser, verifyUser } from "./services/api_helper";

// Custom Components
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import CreatePost from "./components/CreatePost";
import Profile from "./components/Profile/Profile.js";
import AllPosts from "./components/AllPosts.js";
import SinglePost from "./components/singlePost";
import UpdatePost from "./components/UpdatePost.js";
import Register from "./components/Register";
import FriendList from "./components/FriendList";
import Footer from "./components/Footer";
import UpdateProfile from "./components/Profile/UpdateProfile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: true,
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
      currentUser: false
    });
    localStorage.removeItem("authToken");
  };

  componentDidMount = () => {
    this.handleVerify();
  };

  render() {
    return (
      <div className="App">
        {!this.state.currentUser ? (
          <>
            <Redirect to="/" />
            <Route
              exact
              path="/"
              render={() => <Login handleLogin={this.handleLogin} />}
            />
            <Route
              exact
              path="/register"
              render={() => <Register handleRegister={this.handleRegister} />}
            />
          </>
        ) : (
          <>
            <Redirect to="/home" />
            <Header handleLogout={this.handleLogout} userName={this.state.currentUser.username} />
            <FriendList />
            <Switch>
              <Route
                exact
                path="/home"
                render={() => <AllPosts currentUser={this.state.currentUser} />}
              />
              <Route exact path="/singlepost/:id" component={SinglePost} />
              <Route exact path="/createPost" render={() => <CreatePost />} />
              <Route
                exact
                path="/profile"
                render={() => <Profile userId={this.state.currentUser.id} />}
              />
              <Route exact path="/updatePost/:id" component={UpdatePost} />
              
              <Route exact path="/users/:id" component={UpdateProfile} />
            </Switch>
            <Footer />
          </>
        )}
      </div>
    );
  }
}

export default App;
