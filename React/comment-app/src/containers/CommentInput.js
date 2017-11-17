import React, {Component} from 'react';
import {connect} from 'react-redux';
import ComponentInput from '../components/CommentInput';
import {addComment} from '../reducers/comments';

class CommentInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }
  componentWillMount() {
    this._loadUsername();
  }
  handleUsernameInputBlue = (username) => {
    localStorage.setItem('username', username);
  }
  handleSubmit = (comment) => {
    let comments = this.props.comments;
    let newComments = [...comments, comment];
    localStorage.setItem('comments', JSON.stringify(newComments));
    this.props.onAddComment && this.props.onAddComment(comment);
  }
  _loadUsername = () => {
    const username = localStorage.getItem('username');
    username && this.setState({username})
  }
  render(){
    return(
      <ComponentInput
        username={this.state.username}
        onUsernameInputBlue={this.handleUsernameInputBlue}
        onSubmit={this.handleSubmit}
      />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    username: state.username,
    comments: state.comments
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddComment: (comment) => {
      dispatch(addComment(comment))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer);