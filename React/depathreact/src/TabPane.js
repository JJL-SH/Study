import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabPane extends Component {
  getTabs = () => {
    const = { classPrefix, activeIndex, panels } = this.props;

    return React.Children.map(panels, (child) => {
      if (!child) {
        return;
      }

      const order = parseInt(child.props.order, 10);

      let classes = classnames({
      [`${classPrefix}-tab`]: true,
      [`${classPrefix}-active`]: activeIndex === order,
      [`${classPrefix}-disabled`]: child.props.disabled
      return (
        <li>{child.props.tab}</li>
      );
    })
  }
  render() {
    return (

    );
  }
}

export default TabPane;

TabPane.propTypes = {
  tab: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  order: PropTypes.string.isRequired,
  disable: PropTypes.bool
}