import React, { Component } from "react";
import { allUsers } from "../services/api_helper";

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    console.log("FriendList Comp");
    try {
      const resp = await allUsers();
      console.log(resp.data);
      this.setState({
        users: resp.data,
        apiDataLoaded: true
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="friendList">
        {this.state.apiDataLoaded &&
          this.state.users.map((user, index) => (
            <div className="indUser" key={index}>
              <img src={user.image_url} alt="userpic" />
              <div className="endfix">
                <>
                  <p>{user.usertag}</p>
                  <p>{user.username}</p>
                </>
                <button onClick={e => alert("Follow")}>Follow</button>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default FriendList;
