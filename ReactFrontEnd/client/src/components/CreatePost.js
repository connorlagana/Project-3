import React, { Component } from "react";

import { newPost } from "../services/api_helper";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {
        title: "",
        image_url: "",
        description: "",
        fun_fact: ""
      }
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      posts: {
        ...this.state.posts,
        [name]: value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const resp = newPost(this.state.posts);
      console.log(resp);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="createPost">
        <img src={this.state.image_url} />
        <div className="createPostForm">
          {this.state.image_url && (
            <img src={this.state.image_url} alt="post" id="postImage" />
          )}
          <form className="createPost" onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.posts.title}
              onChange={this.onChange}
              required
            />
            <input
              type="text"
              name="image_url"
              placeholder="Image Url"
              value={this.state.posts.image_url}
              onChange={this.onChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.posts.description}
              onChange={this.onChange}
              required
            />
            <input type="submit" value="Post" className="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePost;
