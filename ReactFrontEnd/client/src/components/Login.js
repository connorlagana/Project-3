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
        <div id="gradientBG">
          <div id="backframeLogin">
            <div id="leftLogin">
              <img src="https://img.freepik.com/free-vector/modern-flat-website-login-page-template_2095-181.jpg?size=626&ext=jpg"></img>
            </div>
            <div id="rightLogin">
              <h1>Member Login</h1>
              <form
                onSubmit={e => {
                  this.props.handleLogin(e, {
                    username: this.state.username,
                    password: this.state.password
                  });
                }}
              >
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  placeholder="Username5"
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
                <button>Login</button>
                <Link to="/register">
                  <p className="signup">Not a member? Click to sign up</p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
