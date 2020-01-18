import React from "react";

function ProfPost(props) {
  return (
    <div id="profPosts">
      {props.posts.map((post, key) => (
          <div id="profPost">
            <p>@{props.name}</p>
            <img src={props.profImage} id="profImageOnPost" alt="professional" />
            <img src={post.image_url} id="postImageOnProf" alt="postimages"/>
            <p>{post.description}</p>
          </div>
        ))}
    </div>
  );
}

export default ProfPost;
