import React from "react";
import { Route, Link } from "react-router-dom";

function ProfPost(props) {
  return (
    <div id="profPosts">
      {props.posts.map((post, key) => (
          <div id="profPost">
            <p>@{props.name}</p>
            <img src={props.profImage} id="profImageOnPost" />
            <img src={post.image_url} id="postImageOnProf" />
            <p>{post.description}</p>
          </div>
        ))}
    </div>
  );
}

export default ProfPost;
