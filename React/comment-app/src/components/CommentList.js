import React, { Component } from 'react';
import Comment from './Comment';
class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  handleDeleteComment = (index) => {
    if (this.props.onDelComment) {
      this.props.onDelComment(index)
    }
  }
  render() {
    return(
      <div>
        {
          this.props.comments.map((item, i) => {
            return (
              <Comment
                comment={item}
                key={i}
                index={i}
                onDeleteComment={this.handleDeleteComment}
              />
            )
          })
        }
      </div>
    )
  }
}

export default CommentList