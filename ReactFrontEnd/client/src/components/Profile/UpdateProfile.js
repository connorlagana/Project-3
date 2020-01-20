import React, { Component } from "react";
import { updateUser, userDetails } from "../../services/api_helper";

export default class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usertag: "",
      username: "",
      image_url: "",
      description: "",
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const resp = await userDetails(id);
      this.setState({
        usertag: resp.data.usertag,
        username: resp.data.username,
        image_url: resp.data.image_url,
        description: resp.data.description
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
            updateUser(this.props.match.params.id, this.state);
          }}
          >
          <label htmlFor="name">usertag</label>
          <input
            type="text"
            name="usertag"
            value={this.state.usertag}
            onChange={this.handleChange}
          />
          <br />
          
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
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
