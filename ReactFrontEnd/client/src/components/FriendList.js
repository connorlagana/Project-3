import React, { Component } from "react";
import { allUsers, addFollowers } from "../services/api_helper";

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
    console.log(userId);
    console.log(follId);
    const resp = await addFollowers(userId, { followers: `${follId}` });
    console.log(resp);
  };

  render() {
    console.log(this.props);
    return (
      <div className="friendList">
        {this.state.apiDataLoaded &&
          this.state.users.map((user, index) => (
            <div className="indUser" key={index}>
              <div className="imageContainer">
                <img src={user.image_url} alt="userpic" />
              </div>
              <div className="endfix">
                <>
                  <p>{user.usertag}</p>
                  <p>{user.username}</p>
                </>
                <button onClick={e => this.handleAddFollower(e, user.id)}>
                  Follow
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default FriendList;
