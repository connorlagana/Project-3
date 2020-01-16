import React, { Component } from "react";
import "./App.css";

import Login from "./components/Login.js";
import Header from "./components/Header.js"

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
        </div>
      );
    }
  }


export default App;
