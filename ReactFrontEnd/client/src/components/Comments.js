import React, { Component } from "react";
import { showComment, newComment } from "../services/api_helper";

import CreateComment from "./CreateComment";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    const comments = await showComment();
    console.log(comments);
    this.setState({
      comments,
      apiDataLoaded: true
    });
  };

  handleSubmit = async (e, commentText) => {
    e.preventDefault();
    const resp = "";
    try {
      resp = newComment({
        comment: commentText,
        postId: this.props.postId
      });
      this.setState({
        comments: [...this.state.comments, resp]
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.state.comments);
    return (
      <>
        {this.state.apiDataLoaded &&
          this.state.comments.map((post, id) => (
            <div key={id}>
              <p>{post.comment}</p>
            </div>
          ))}
        <CreateComment
          postId={this.props.postId}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default Comments;
