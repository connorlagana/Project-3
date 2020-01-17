import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./components/Login.js";
import Header from "./components/Header.js"
import CreatePost from "./components/CreatePost.js"
import AllPosts from "./components/AllPosts.js"
// import Home from "./components/Home.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      errorText: ""
     }
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
          <Login />
        <Route
          exact
          path="/"
            render={() => <AllPosts currentUser={this.state.currentUser} />}
            />



          <Route exact path="/createPost" render={()=><CreatePost />}/>
        </div>
      );
    }
  }


export default App;
