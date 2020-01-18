import React, { Component } from "react";
import {
  showCommentPost,
  newComment,
  deletComment
} from "../services/api_helper";

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
    console.log("submit comment triggered");
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

  handleDelete = async (e, commentId) => {
    e.preventDefault();
    console.log(commentId);
    try {
      await deletComment(commentId);
      const comments = this.state.comments.filter(comment => comment.id !== commentId);
      this.setState({
        comments
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.state.comments);
    return (
      <div className="commentSection">
        {this.state.apiDataLoaded &&
          this.state.comments.map((comment, id) => (
            <div key={id} className="singleComment">
              <p>{comment.comment}</p>
              <button onClick={e => this.handleDelete(e, comment.id)}>
                <i class="fa fa-trash"></i>
              </button>
            </div>
          ))}
        <CreateComment
          postId={this.props.postId}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Comments;
