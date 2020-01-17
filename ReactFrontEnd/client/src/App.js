import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import CreatePost from "./components/CreatePost";
import Profile from "./components/Profile/Profile.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      errorText: ""
    };
  }
  handleLogout = () => {
    this.setState({
      currentUser: null
    });
    localStorage.removeItem("authToken");
  };
  render() {
    return (
      <div className="App">
        <Header handleLogout={this.handleLogout} />
        <Route exact path="/login" render={() => <Login />} />

        <Route exact path="/createPost" render={() => <CreatePost />} />
        <Route exact path="/profile" render={() => <Profile />} />
      </div>
    );
  }
}

export default App;
