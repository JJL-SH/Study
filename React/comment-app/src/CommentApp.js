import React, { Component } from 'react';
import CommentInput from './containers/CommentInput';
import CommentList from './containers/CommentList';
import WrapWithLoadData from './WrapWithLoadData';

let test = false;
class CommentApp extends Component {


  componentWillMount() {

  }
  xxxxx = () => {
    this.forceUpdate();
  }

  render() {
    console.log(HTMLFrameSetElement);
    return(
      <div className="wrapper">
        111
      </div>
    )
  }
}

setTimeout(() => {
  test = true;
  var ooo = new CommentApp();
  console.log(ooo);

  ooo.xxxxx();
}, 1000)

// CommentApp = WrapWithLoadData(CommentApp, 'comments');
export default CommentApp

