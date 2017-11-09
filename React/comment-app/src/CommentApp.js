import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: localStorage.comments && JSON.parse(localStorage.comments) || []
    }
  }
  handleSubmit = (comment) => {
    this.setState({
      comments: [...this.state.comments, comment]
    }, () => {
      this._saveComments();
    })
  }
  _saveComments = () => {
    localStorage.comments = JSON.stringify(this.state.comments)
  }
  handleDeleteComment = (index) => {
    const comments = this.state.comments;
    comments.splice(index, 1)
    this.setState({comments}, () => {
      this._saveComments();
    })
  }
  render() {
    return(
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmit}/>
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment}/>
      </div>
    )
  }
}

export default CommentApp;