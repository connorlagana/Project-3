import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/createPost"> Create Post</Link>
      <Link to="/profile"> Profile</Link>
      <button onClick={props.handleLogout}>Logout</button>
    </nav>
  )
}

export default Header