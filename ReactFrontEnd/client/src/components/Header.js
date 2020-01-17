import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <div>
      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fnationalzoo.si.edu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F480x240_scale_and_crop%2Fpublic%2Fanimals%2Fcheetah-003.jpg%3Fitok%3DdInQIFay%26timestamp%3D1519941539&imgrefurl=https%3A%2F%2Fnationalzoo.si.edu%2Fanimals%2Fcheetah&docid=7UP-Cg7hpPS4XM&tbnid=K9kAtC98NV4wTM%3A&vet=10ahUKEwiBpaGHpIvnAhWPGs0KHe7QCJQQMwh8KAEwAQ..i&w=480&h=240&bih=821&biw=1440&q=cheetahs&ved=0ahUKEwiBpaGHpIvnAhWPGs0KHe7QCJQQMwh8KAEwAQ&iact=mrc&uact=8" alt="logo"/>
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