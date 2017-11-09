import React, { Component } from 'react';

class CommentInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: localStorage.username || '',
      content: ''
    }
  }
  componentDidMount(){
    this.textarea.focus();
  }
  handleInputChange = (event, key) => {
    this.setState({
      [key]: event.target.value
    })
  }
  handleInputBlur = (event) => {
    localStorage.username = event.target.value;
  }
  handleSubmit = () => {
    const {username, content} = this.state;

    this.props.onSubmit && this.props.onSubmit({username, content, created: +new Date()});
    this.setState({content: ''})
  }
  render() {
    return(
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input 
              value={this.state.username} 
              onChange={(e) => {this.handleInputChange(e, 'username')}}
              onBlur={this.handleInputBlur}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea ref={(e) => {this.textarea = e}} value={this.state.content} onChange={(e) => {this.handleInputChange(e, 'content')}}/>
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput;