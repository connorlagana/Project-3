import React, { Component } from 'react';

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {}
    }
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const resp = newComment(this.state.comment);
      console.log(resp);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <form className="createComment" onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          name="comment"
          placeholder="comment"
          onChange={this.onChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateComment;