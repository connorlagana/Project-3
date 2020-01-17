import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <div>

      <nav>
        <Link to="/"> Home </Link>
        <Link to="/createPost"> Create Post</Link>
        <Link to="/profile"> Profile</Link>
        <button onClick={props.handleLogout}>Logout</button>
      </nav>
      
      </div>
  )
}

export default Header