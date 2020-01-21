import React, { Component } from "react";
import { allUsers, addFollowers, getFollowers } from "../services/api_helper";

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      apiDataLoaded: false,
      followers: []
    };
  }

  componentDidMount = async () => {
    try {
      const resp = await allUsers();
      const followers = await getFollowers(this.props.currentUser.id);
      this.setState({
        users: resp.data,
        followers
      });
      setTimeout(this.findFollowers, 200);
      this.findFollowers();
    } catch (e) {
      console.log(e);
    }
  };

  findFollowers = () => {
    const array1 = this.state.users;
    let array2 = this.state.followers;
    array2 = array2.map(key => +key);
    console.log(array1);
    console.log(array2);
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i].id === array2[j]) {
          array1[i].friend = "Unfollow";
        } else {
          array1[i].friend = "Follow";
        }
      }
    }
    console.log(array1);
    this.setState({
      users: array1,
      apiDataLoaded: true
    });
  };

  handleAddFollower = async (e, follId) => {
    e.preventDefault();
    const userId = this.props.currentUser.id;
    const resp = await addFollowers(userId, { followers: `${follId}` });
    setTimeout(this.componentDidMount, 200);
    console.log(resp);
  };

  render() {
    console.log(this.props);
    console.log(this.state.users);
    return (
      <div className="userList">
        <h1>Other Users:</h1>
        <div id="belowOtherUsers">
          {this.state.apiDataLoaded &&
            this.state.users.map((index, user) => (
              <div className="indUser" key={index}>
                <div className="imageContainer">
                  <img src={user.image_url} alt="userpic" />
                </div>
                <div className="endFix">
                  <p id="otherUserTag">@{user.usertag}</p>
                  <p id="otherUsername">{user.username}</p>
                  <button onClick={e => this.handleAddFollower(e, user.id)}>
                    {user.friend}
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
