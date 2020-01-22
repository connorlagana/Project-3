import React from "react";
import { Link } from "react-router-dom";

function Profile(props) {
  return (
    <div>
      <div id="profHeader">
        <div id="leftAbout">
          <h1>@{props.name}</h1>
          <Link to={`/users/${props.id}`} id={props.id}>
            Update
          </Link>
        </div>
        <div id="centerAbout">
          <img src={props.image_url} alt="profilepic" />
        </div>
        <div id="rightAbout">
          <h3>Posts: {props.posts.length}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
