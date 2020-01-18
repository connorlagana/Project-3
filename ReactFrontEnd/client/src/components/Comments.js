import React, { Component } from "react";
import { showCommentPost, newComment } from "../services/api_helper";

import CreateComment from "./CreateComment";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    const comments = await showCommentPost(this.props.postId);
    console.log(comments);
    this.setState({
      comments,
      apiDataLoaded: true
    });
  };

  handleSubmit = async (e, commentText) => {
    e.preventDefault();
    console.log("submit comment triggered")
    try {
      const resp = await newComment({
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
