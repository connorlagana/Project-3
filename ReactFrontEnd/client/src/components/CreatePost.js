import React, { Component } from "react";


import { newPost } from "../services/api_helper"

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
      <form className="createPost" onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={this.onChange}
          required
        />
        <input
          type="text"
          name="image_url"
          placeholder="image url"
          onChange={this.onChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={this.onChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreatePost;
