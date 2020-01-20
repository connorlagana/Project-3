import React, { Component } from "react";
import { updatePost, showPost } from "../services/api_helper";

export default class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image_url: "",
      description: "",
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const resp = await showPost(id);
      this.setState({
        title: resp.title,
        image_url: resp.image_url,
        description: resp.description
      });
    } catch (e) {
      console.log(e);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="allPosts">
        <div className="posts">
          <img src={this.state.image_url} alt="post" id="postImage" />
          <form
          onSubmit={e => {
            e.preventDefault();
            updatePost(this.props.match.params.id, this.state);
          }}
          >
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="image_url">Image url</label>
          <input
            type="text"
            name="image_url"
            value={this.state.image_url}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="description">description </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <br />
          <button type="submit">Update Post </button>
          </form>
        </div>
      </div>
    );
  }
}
