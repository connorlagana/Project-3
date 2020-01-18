import React from "react";

function Profile(props) {
  return (
    <div>
      <div id="profHeader">
        <div id="leftAbout">
          <h1>@{props.name}</h1>
          <button>Edit Profile</button>
        </div>
        <div id="centerAbout">
          <img src={props.image_url} alt="profilepic" />
        </div>
        <div id="rightAbout">
          <h3>Posts: 69</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
