import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './CommentApp';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import commentsReducer from "./reducers/comments";

const store = createStore(commentsReducer);

ReactDOM.render(
  <Provider store={store}>
    <CommentApp/>
  </Provider>,
  document.getElementById('root')
);

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

// class Index extends Component {
//   static childContextTypes = {
//     themeColor: PropTypes.string
//   }
//   constructor(props) {
//     super(props);
//     this.state = {
//       themeColor: 'red'
//     }
//   }
//   componentWillMount () {
//     setTimeout(() => {
//       this.setState({ themeColor: 'green' })
//     }, 500);
//   }
//   getChildContext () {
//     return { themeColor: this.state.themeColor }
//   }
//   render() {
//     return(
//       <div>
//         <Header/>
//         <Main/>
//       </div>
//     )
//   }
// }
// class Header extends Component {
//   render() {
//     return(
//       <div>
//         <h2>This is header</h2>
//         <Title/>
//       </div>
//     )
//   }
// }
// class Main extends Component {
//   render() {
//     return(
//       <div>
//         <h2>This is main</h2>
//         <Content/>
//       </div>
//     )
//   }
// }
// class Title extends Component {
//   static contextTypes = {
//     themeColor: PropTypes.string
//   }
//   render() {
//     return(
//       <div><h2 style={{ color: this.context.themeColor }}>React.js标题</h2></div>
//     )
//   }
// }
// class Content extends Component {
//   render() {
//     return(
//       <div><h2>React.js内容</h2></div>
//     )
//   }
// }
// ReactDOM.render(
//   <Index/>,
//   document.getElementById('root')
// )


// const makeProvider = (data) => (WrapperComponent) =>{
//   return class extends Component {
//     static childContextTypes = {
//       data: PropTypes.string
//     }
//     getChildContext () {
//       return { data }
//     }
//     render() {
//       return(
//         <WrapperComponent/>
//       )
//     }
//   }
// }
