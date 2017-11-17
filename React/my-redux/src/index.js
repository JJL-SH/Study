import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import UserList from './UserList';

const themeReducer = (state, action) => {
  if (!state) {
    return {
      themeColor: 'red'
    }
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        themeColor: action.themeColor
      }
      break;

    default:
      return state;
      break;
  }
}
const ADD_USER = 'ADD_USER';
const DEL_USER = 'DEL_USER';

const userReducer = (state, action) => {
  if(!state) {
    return {
      userList: []
    }
  }
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userList: [
          ...state.userList,
          action.user
        ]
      }
      break;

    case DEL_USER:
      let userList = [...state.userList];
      userList.splice(action.id, 1);
      return {
        ...state,
        userList
      };
      break;

    default:
    return state;
      break;
  }
}
const store = createStore(userReducer);

class Index extends Component {
  render() {
    return(
      <div>
        <UserList/>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index/>
  </Provider>,
  document.getElementById('root')
);
