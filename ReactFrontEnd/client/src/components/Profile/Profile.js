import React, { Component } from "react";
import ProfileHeader from "./ProfileHeader.js";
import ProfPost from "./ProfPost.js";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      description: "",
      posts: []
    };
  }

  async componentDidMount() {
    try {
      const userRes = await axios.get(
        `http://localhost:3001/users/${this.props.userId}`
      );
      const postRes = await axios.get(
        `http://localhost:3001/posts/user/${this.props.userId}`
      );

      this.setState({
        name: userRes.data.username,
        image_url: userRes.data.image_url,
        description: userRes.data.description,
        posts: postRes.data
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div id="profile">
        <ProfileHeader
          name={this.state.name}
          image_url={this.state.image_url}
          description={this.state.description}
        />
        <ProfPost
          posts={this.state.posts}
          profImage={this.state.image_url}
          name={this.state.name}
        />
      </div>
    );
  }
}

export default Profile;
