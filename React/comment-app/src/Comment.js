import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);

    this.state = {
      timeString: ''
    }
  }
  componentWillMount = () => {
    this._updateTimeString();
    this._timer = setInterval(() => {
      this._updateTimeString();
    }, 5000)
  }
  componentWillUnmount = () => {
    clearInterval(this._timer);
  }
  _updateTimeString = () => {
    const comment = this.props.comment;
    const duration = (+new Date() - comment.created) / 1000;

    this.setState({
      timeString: duration > 60 ? `${Math.round(duration / 60)}分钟前` : `${Math.round(duration)}秒前`
    })
  }
  handleDeleteComment = () => {
    this.props.onDeleteComment && this.props.onDeleteComment(this.props.index);
  }
  render() {
    return(
      <div className="comment">
        <div className="comment-user">
          <span>{this.props.comment.username}</span> : 
        </div>
        <p>{this.props.comment.content}</p>
        <span className="comment-created">{this.state.timeString}</span>
        <span className='comment-delete' onClick={this.handleDeleteComment}>
          删除
        </span>
      </div>
    )
  }
}

export default Comment;