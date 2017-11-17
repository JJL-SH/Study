import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from './User';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: '',
      gender: ''
    }
  }
  handleChange(type, e) {
    this.setState({
      [type]: e.target.value
    })
  }
  handleSubmit() {
    this.props.onAddUser && this.props.onAddUser(this.state);
    this.setState({
      username: '',
      age: '',
      gender: ''
    })
  }
  handleDelUser = (id) => {
    this.props.onDelUser && this.props.onDelUser(id);
  }
  render () {
    console.log(this.props.userList);
    return (
      <div>
        {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
        <div className='add-user'>
          <div>Username: <input type='text' value={this.state.username} onChange={this.handleChange.bind(this, 'username')} /></div>
          <div>Age: <input type='number' value={this.state.age} onChange={this.handleChange.bind(this, 'age')} /></div>
          <div>Gender:
            <label>
              Male:
              <input
                type='radio'
                name='gender'
                value='male'
                checked={this.state.gender === 'male'}
                onClick={this.handleChange.bind(this, 'gender')}/></label>
            <label>
              Female:
              <input
                type='radio'
                name='gender'
                value='female'
                checked={this.state.gender === 'female'}
                onClick={this.handleChange.bind(this, 'gender')} /></label>
          </div>
          <button onClick={this.handleSubmit.bind(this)}>增加</button>
        </div>
        {/* 显示用户列表 */}
        <div className='users-list'>
          {
            this.props.userList.map((user, index) => {
              return <User user={user} key={index} index={index} onDelUser={this.handleDelUser}/>
            })
          }
        </div>
      </div>
    )
  }
}

UserList = connect((state) => {
  return {
    userList: state.userList
  }
}, (dispatch) => {
  return {
    onAddUser: (user) => {
      console.log('dispatch', user);
      dispatch({
        type: 'ADD_USER',
        user
      })
    },
    onDelUser: (id) => {
      dispatch({
        type: 'DEL_USER',
        id
      })
    }
  }
})(UserList);
export default UserList;
