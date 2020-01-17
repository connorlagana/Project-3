import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      res: ""
    };
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:3001/users/2");
    console.log(res);

    this.setState({
      name: res.data.username,
      image_url: res.data.image_url
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <div id="profHeader">
          <div id="profilePic">
            <img id="profilePictureImage" src={this.state.image_url} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
