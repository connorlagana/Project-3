import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="headerRay">
      <img
        src="https://www.freeiconspng.com/uploads/instagram-photo-camera-logo-outline-icons--free-download-14.jpg"
        alt="Foodstagram"
        className="logoHeader"
      />
      <h1>FOODSTAGRAM</h1>
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
  );
};

export default Header;
