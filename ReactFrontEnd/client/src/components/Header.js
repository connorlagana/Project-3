import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/post">Posts</Link>
      <Link to="/login">Login</Link>
      <Link to="/createpost"> Create Post</Link>
      <button onClick={props.handleLogout}>Logout</button>
    </nav>
  )
}

export default Header