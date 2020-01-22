import React, { Component } from "react";
import { deletePost, allPosts } from "../services/api_helper";
import { Link } from "react-router-dom";
import Comments from "./Comments";

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      apiDataLoaded: false,
      isPlaying: false,
      currentUser: null
    };
  }

  componentDidMount = async () => {
    try {
      const results = await allPosts();
      console.log(results);
      this.setState({
        posts: results,
        apiDataLoaded: true,
        currentUser: this.props.currentUser
      });
    } catch (e) {
      console.log(e);
    }
  };

  delete = async (e, postId) => {
    e.preventDefault();
    console.log(postId);
    try {
      await deletePost(postId);
      const posts = this.state.posts.filter(post => post.id !== postId);
      this.setState({
        posts
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="allPosts">
        {this.state.apiDataLoaded &&
          this.state.posts.map((post, key) => (
            <div className="posts" key={key}>
              <h3>{post.title}</h3>
              <button id="threeCircles">•••</button>
              <img src={post.image_url} alt="post" id="postImage" />
              <p>{post.description}</p>
              <p>{post.fun_fact}</p>
              <h6>{new Date(post.createdAt).toString()}</h6>
              {this.state.currentUser && (
                <button
                  onClick={e => {
                    this.delete(e, post.id);
                  }}
                >
                  Delete
                </button>
              )}
              <Link to={`/singlepost/${post.id}`}>
                <button>Open Post</button>
              </Link>
              <Comments postId={post.id} />
            </div>
          ))}
      </div>
    );
  }
}

export default AllPosts;
