import React, {Component} from 'react';

class User extends Component {
  constructor(props) {
    super(props);
  }
  handleDelUser = () => {
    this.props.onDelUser && this.props.onDelUser(this.props.index);
  }
  render () {
    const { user } = this.props
    return (
      <div>
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button onClick={this.handleDelUser}>删除</button>
      </div>
    )
  }
}


export default User;
