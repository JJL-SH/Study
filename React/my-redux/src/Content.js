import React, { Component } from 'react';
import ThemeSwitch from './ThemeSwitch';
import { connect } from 'react-redux';

class Header extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return(
      <div>
        <p style={{ color: this.props.themeColor }}>React.js Content</p>
        <ThemeSwitch/>
      </div>
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