import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    return(
      <div>
        {this.props.comments.map((comment, index) => {
          return <Comment key={comment.created} index={index} onDeleteComment={this.props.onDeleteComment} comment={comment}/>
        })}
      </div>
    )
  }
}

export default CommentList;