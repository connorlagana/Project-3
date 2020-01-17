import React, {Component} from "react";
import { showComment } from "../services/api_helper";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentDidMount = async () => {
    const comments = await showComment();
    this.state({
      comments
    })
  }

  render() {
    return (
      this.state.comments.map((post, id) => 
        <div key={id}>
          <p>{post}</p>
        </div>
      )
    )
  }
}

export default Comments;
