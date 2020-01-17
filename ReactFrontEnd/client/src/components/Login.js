import React, { Component } from "react";
import { Link } from "react-router-dom";
import foodBackground from "../images/loginBackground.jpg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = async e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div id="login">
        <div id="loginBackground">
          <img src={foodBackground} alt ="background"/>
        </div>
        <div id="backframeLogin">
          <form
            onSubmit={e => {
              this.props.handleLogin(e, {
                username: this.state.username,
                password: this.state.password
              });
            }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 38a56f2c03331e177420d9d7e7c83a4fe2ebd144
            <>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
                placeholder="Username"
                required
              />
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                placeholder="Password"
                required
              />
            </>
            <>
              <input type="submit" value="Login" />
              <Link to="/register"><p className="signup">Not a member? Click to sign up</p></Link>
            </>
<<<<<<< HEAD
=======
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
              placeholder="Username"
              required
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              placeholder="Password"
              required
            />
            <input type="submit" value="Login" />
            <Link to="/register">Not a member? Click to sign up</Link>
>>>>>>> b7e203de3155181a69f5ba914a8ad62af17ac6a8
=======

>>>>>>> 38a56f2c03331e177420d9d7e7c83a4fe2ebd144
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
