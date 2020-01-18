import React, { Component } from "react";
import foodBackground from "../images/loginBackground.jpg";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div id="login">
        <div id="loginBackground">
          <img src={foodBackground} alt="background" />
        </div>
        <div id="backframeLogin">
          <form
            className="register"
            onSubmit={e =>
              this.props.handleRegister(e, {
                username: this.state.username,
                password: this.state.password
              })
            }
          >
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Create a Username"
              required
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Create a Password"
              required
            />
            <input className="submit" type="submit" value="Create Account" />
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
