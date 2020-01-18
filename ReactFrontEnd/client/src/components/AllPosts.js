import React, { Component } from "react";
import axios from "axios";
import { deletePost } from "../services/api_helper";
import { Link } from "react-router-dom";
import Comments from "./Comments";

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      apiDataLoaded: false,
      currentUser: null
    };
  }

  componentDidMount = async () => {
    try {
      const results = await axios.get("http://localhost:3001/posts");
      console.log(results.data);
      this.setState({
        posts: results.data,
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
              <Link to={`/singlepost/${post.id}`}>Open Post</Link>
              <Comments postId={post.id} />
            </div>
          ))}
      </div>
    );
  }
}

export default AllPosts;
