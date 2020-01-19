import React from "react";

function ProfPost(props) {
  console.log(props);
  return (
    <div id="profPosts">
      {props.posts &&
        props.posts.map((post, key) => (
          <div id="profPost" key={key}>
            <div>
              <img
                src={props.profImage}
                id="profImageOnPost"
                alt="professional"
              />
              <p>@{props.name}</p>
            </div>
            <div>
              <img src={post.image_url} id="postImageOnProf" alt="postimages" />
            </div>
            <p>{post.description}</p>
          </div>
        ))}
    </div>
  );
}

export default ProfPost;
