import React from "react";
import { Link } from "react-router-dom";
import fontLogo from "../images/fontLogo.png";

const Header = props => {
  return (
    <div className="headerRay">
      <div>
        <img
          src="https://www.freeiconspng.com/uploads/instagram-photo-camera-logo-outline-icons--free-download-14.jpg"
          alt="Foodstagram"
          className="logoHeader"
        />
      </div>
      <div>
        <img src={fontLogo} id="fontLogo" />
      </div>
      <div>
        <nav>
          <Link to="/home" className="navItem">
            Home
          </Link>
          <Link to="/createPost" className="navItem">
            Create Post
          </Link>
          <Link to="/profile" className="navItem">
            {props.userName}
          </Link>
          <Link onClick={e => props.handleLogout(e)} className="navItem">
            Logout
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
