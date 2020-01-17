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
        <form
          onSubmit={e => {
            alert("FUCK YOU");
          }}
        >
          <>
            <input placeholder="Username" />
            <input placeholder="Password" />
          </>
          <>
            <input type="submit" value="submit" />
          </>
        </form>
      </div>
    </div>
  );
}

export default Login;
