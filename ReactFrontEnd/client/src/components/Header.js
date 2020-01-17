import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <div className="headerRay">
      <img src="www.google.com" alt="logo"/>
      <h1>FOODSTAGRAM</h1>
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/createPost"> Create Post</Link>
        <Link to="/profile"> Profile</Link>
        <button onClick={props.handleLogout}>Logout</button>
      </nav>
      
      </div>
  )
}

export default Header