import React from "react";
import { Route, Link } from "react-router-dom";

function ProfPost(props) {
  return (
    <div id="profPost">
      
      {props.apiDataLoaded &&
        props.posts.map((post, key) => (
          <div>
            <p>{post.userId}</p>
            <img src={post.profImage} id="profImageOnPost" />
            <img src={post.image_url} id="postImageOnProf" />
            <p>{post.description}</p>
          </div>
        ))}
    </div>
  );
}

export default ProfPost;
