import React, { Component } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import fontLogo from "../images/fontLogo.png";

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
              <img
                id="fruitPic"
                src="https://images.unsplash.com/photo-1563298998-c743b38848b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
              ></img>
            </div>
            <div id="rightLogin">
              <img src={fontLogo} id="fontLogoLogin" />
              <h1>Member Login</h1>
              <form
                onSubmit={e => {
                  this.props.handleLogin(e, {
                    username: this.state.username,
                    password: this.state.password
                  });
                }}
              >
                <div className="borderInputLogin">
                  <input
                    className="inputLogin"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="borderInputLogin">
                  <input
                    className="inputLogin"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    placeholder="Password"
                    required
                  />
                </div>

                <button id="loginButton">Login</button>
                <div id="newHoverDiv">
                  <Link to="/register" id="bottomLogin">
                    <p className="signup">Not a member? Click to sign up</p>
                    <KeyboardArrowRight color="secondary" id="arrowRight" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
