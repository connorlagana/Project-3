import React, { Component } from "react";
import { userDetails } from "../../services/api_helper";

class Followers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      apiDataLoaded: false
    };
  }

  componentDidMount = () => {
    setTimeout(this.getFriends, 1000);
  };

  getFriends = async () => {
    try {
      const followersId = this.props.followers;
      console.log(followersId);
      followersId.map(async followerId => {
        let id = +followerId;
        const res = await userDetails(id);
        console.log(res);
        this.setState({
          friends: [...this.state.friends, res.data],
          apiDataLoaded: true
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.props.followers);
    console.log(this.state.friends);
    return (
      <div className="followers">
        {this.state.friends.length > 0 &&
          this.state.friends.map((element, index) => (
            <div style={element} key={index} className="followersProfile">
              <h6>{element.username}</h6>
              <img src={element.image_url} alt="profilePic"/>
            </div>
          ))}
      </div>
    );
  }
}

export default Followers;
