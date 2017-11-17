import React, { Component } from 'react';
import CommentInput from './containers/CommentInput';
import CommentList from './containers/CommentList';
import WrapWithLoadData from './WrapWithLoadData';

class CommentApp extends Component {
  render() {
    return(
      <div className="wrapper">
        <CommentInput/>
        <CommentList/>
      </div>
    )
  }
}

CommentApp = WrapWithLoadData(CommentApp, 'comments');
export default CommentApp