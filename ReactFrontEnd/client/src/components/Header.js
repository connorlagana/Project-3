import React, { Component } from "react";
import { Link } from "react-router-dom";
import fontLogo from "../images/fontLogo.png";
import logoCheetah from "../images/logoCheetah.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hamburger() {
    var ham = document.getElementById("myTopnav");
    if (window.matchMedia("(max-width: 800px)").matches) {
      if (ham.style.display === "block") {
        ham.style.display = "none";
      } else {
        ham.style.display = "block";
      }
    }
  }

  render() {
    return (
      <div className="headerRay">
        <img src={logoCheetah} alt="Foodstagram" className="logoHeader" />
        <img src={fontLogo} id="#fontLogoHeader" />
        <a href="#nowhere" className="icon" onClick={this.hamburger}>
          <i className="fa fa-bars"></i>
        </a>
        <nav
          className="topnav hideOnMobile"
          id="myTopnav"
          onClick={this.hamburger}
        >
          <Link to="/home" className="navItem hideOnMobile">
            Home
          </Link>
          <Link to="/createPost" className="navItem hideOnMobile">
            Create Post
          </Link>
          <Link to="/profile" className="navItem hideOnMobile">
            {this.props.userName}
          </Link>
          <Link
            onClick={e => this.props.handleLogout(e)}
            className="navItem hideOnMobile"
          >
            Logout
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
