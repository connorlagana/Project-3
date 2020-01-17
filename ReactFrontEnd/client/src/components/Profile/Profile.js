import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: ""
    };
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.name}</h1>
        <div>
          <img id="profilePicture" src={this.state.image_url} />
        </div>
      </div>
    );
  }
}

export default Profile;
