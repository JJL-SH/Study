import React, { Component } from 'react';
import { connect } from 'react-redux';
class Header extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props);
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js</h1>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateToProps)(Header);
export default Header;