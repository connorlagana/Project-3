import React, { Component } from "react";
import fontLogo from "../images/fontLogo.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      imageUrl: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  registerUser = e => {
    let usertag = this.state.username.split(" ").join("_");
    this.props.handleRegister(e, {
      username: this.state.username,
      usertag: usertag,
      password: this.state.password,
      image_url: this.state.imageUrl
    });
  };

  render() {
    return (
      <div id="register">
        {/* <img id="fontLogo" src={fontLogo} /> */}
        <div id="hello">Hello! Welcome to Foodstagram!</div>
        <img src={this.state.imageUrl} id="imageRegister" />
        <input
          id="myName"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Username"
          autofocus="autofocus"
          onfocus="this.select()"
          required
        />
        <input
          id="myName"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password123"
          required
        />
        <input
          id="myName"
          type="text"
          name="imageUrl"
          value={this.state.imageUrl}
          onChange={this.handleChange}
          placeholder="Image URL"
          required
        />
        <button className="buttonfx curtainup" onClick={this.registerUser}>
          Next
        </button>
      </div>
    );
    // return (
    //   <div id="login">
    //     <div id="loginBackground">
    //       <img src={foodBackground} alt="background" />
    //     </div>
    //     <div id="backframeLogin">
    //       <form
    //         className="register"
    //         onSubmit={e =>
    //           this.props.handleRegister(e, {
    //             username: this.state.username,
    //             password: this.state.password
    //           })
    //         }
    //       >
    //         <input
    //           type="text"
    //           name="username"
    //           value={this.state.username}
    //           onChange={this.handleChange}
    //           placeholder="Create a Username"
    //           required
    //         />
    //         <input
    //           type="password"
    //           name="password"
    //           value={this.state.password}
    //           onChange={this.handleChange}
    //           placeholder="Create a Password"
    //           required
    //         />
    //         <input className="submit" type="submit" value="Create Account" />
    //       </form>
    //     </div>
    //   </div>
    // );
  }
}

export default Register;
