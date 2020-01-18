import React, { Component } from "react";
import { deletePost, showPost } from "../services/api_helper";
import { Link } from "react-router-dom";

//Custom Components
import Comments from "./Comments";

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      apiDataLoaded: false,
      currentUser: null,
      id: this.props.match.params.id
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    try {
      const resp = await showPost(id);
      console.log(resp);
      this.setState({
        post: resp,
        apiDataLoaded: true,
        currentUser: true
      });
    } catch (e) {
      console.log(e);
    }
  };

  delete = async (e, postId) => {
    e.preventDefault();
    try {
      await deletePost(postId);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="allPosts">
        {this.state.apiDataLoaded && (
          <div className="posts">
            <h3>{this.state.post.title}</h3>
            <img src={this.state.post.image_url} alt="post" id="postImage" />
            <p>{this.state.post.description}</p>

            <Link to={`/updatePost/${this.state.post.id}`} id={this.state.id}>
              Update
            </Link>
            {this.state.currentUser && (
              <button
                onClick={e => {
                  this.delete(e, this.state.post.id);
                }}
              >
                Delete
              </button>
            )}
            <Comments postId={this.state.post.id}/>
          </div>
        )}
      </div>
    );
  }
}

export default SinglePost;
