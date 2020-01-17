import React, { Component } from "react";


class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  onChange = e => {
    const value = e.target.value;
    this.setState({
      comment: value
    });
  };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     const resp = newComment({ comment: this.state.comment, postId: this.props.postId });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  render() {
    console.log(this.props.postId);
    return (
      <form className="createComment" onSubmit={e => this.props.handleSubmit(e, this.state.comment)}>
        <input
          type="text"
          name="comment"
          placeholder="comment"
          onChange={this.onChange}
          required
        />
        <input type="submit" value="Comment" />
      </form>
    );
  }
}

export default CreateComment;
