import React from "react";
import { Route, Link } from "react-router-dom";
import foodBackground from "../images/loginBackground.jpg";

function Login() {
  return (
    <div id="login">
      <div id="loginBackground">
        <img src={foodBackground} />
      </div>
      <div id="backframeLogin">
        <form>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
