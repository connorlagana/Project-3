import React, { Component } from "react";
import { allUsers, addFollowers, updateUser } from "../services/api_helper";

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    try {
      const resp = await allUsers();
      this.setState({
        users: resp.data,
        apiDataLoaded: true
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleAddFollower = async (e, follId) => {
    e.preventDefault();
    const userId = this.props.currentUser.id;
    const resp = await addFollowers(userId, { followers: `${follId}` });
    console.log(resp);
  };

  render() {
    console.log(this.props);
    return (
      <div className="friendList">
        <h1>Other Users:</h1>
        <div id="belowOtherUsers">
          {this.state.apiDataLoaded &&
            this.state.users.map((user, index) => (
              <div className="indUser" key={index}>
                <div className="imageContainer">
                  <img src={user.image_url} alt="userpic" />
                </div>
                <div className="endFix">
                  <p id="otherUserTag">{user.usertag}</p>
                  <p id="otherUsername">{user.username}</p>
                  <button onClick={e => this.handleAddFollower(e, user.id)}>
                    Follow
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default FriendList;
