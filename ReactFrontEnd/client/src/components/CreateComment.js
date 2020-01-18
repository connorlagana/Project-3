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

  reset = e => {
    e.preventDefault();
    console.log("test");
    this.setState({
      comment: ""
    });
  };

  render() {
    console.log(this.props.postId);
    return (
      <form
        className="createComment"
        onSubmit={e => {
          this.props.handleSubmit(e, this.state.comment);
          this.reset(e);
        }}
      >
        <input
          className="inputText"
          type="text"
          name="comment"
          placeholder="comment"
          value={this.state.comment}
          onChange={this.onChange}
          required
        />
        <input className="inputSubmit" type="submit" value="Comment" />
      </form>
    );
  }
}

export default CreateComment;
