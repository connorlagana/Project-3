import React, { Component } from "react";
import { Link } from "react-router-dom";




class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  hamburger() {
    var ham = document.getElementById("myTopnav");
    if (ham.style.display === "block") {
      ham.style.display = "none";
    } else {
      ham.style.display = "block";
    }
  }


  render() {
    return (
      <div className="headerRay">
        <img
          src="https://www.freeiconspng.com/uploads/instagram-photo-camera-logo-outline-icons--free-download-14.jpg"
          alt="Foodstagram"
          className="logoHeader"
        />
        <h1>FOODSTAGRAM</h1>
        <a href="#nowhere" className="icon" onClick={this.hamburger}>
          <i className="fa fa-bars"></i>
        </a>
        <nav className="topnav" id= "myTopnav">
          <Link to="/home" className="navItem">
            Home
          </Link>
          <Link to="/createPost" className="navItem">
            Create Post
          </Link>
          <Link to="/profile" className="navItem">
            {this.props.userName}
          </Link>
          <Link onClick={e => this.props.handleLogout(e)} className="navItem">
            Logout
          </Link>
      </nav>
    </div >
  );
  }
};

export default Header;
