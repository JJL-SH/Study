import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TabNav extends Component {
  getTabs = () => {
    const { panels, classPrefix, activeIndex } = this.props;

    return React.Children.map(panels, (child) => {
      if (!child) {return;}

      const order = parseInt(child.props.order, 10);
      // 利用 class 控制显示和隐藏
      let classes = classnames({
        [`${classPrefix}-tab`]: true,
        [`${classPrefix}-active`]: activeIndex === order,
        [`${classPrefix}-disabled`]: child.props.disabled
      });
      let events = {};
      if (!child.props.disabled) {
        events = {
          onClick: this.props.onTabClick.bind(this, order)
        }
      }
      const ref = {};
      if (activeIndex === order) {
        ref.ref = 'activeTab';
      }

      return (
        <li
          role="tab"
          aria-disabled={child.props.disabled ? 'true' : 'false'}
          aria-selected={activeIndex === order ? 'true' : 'false'}
          {...events}
          className={classes}
          key={order}
          {...ref}
        >
          {child.props.tab}
        </li>
      )
    })
  }
  render() {
    const { classPrefix } = this.props;
    const rootClasses = classnames({
      [`${classPrefix}-bar`]: true
    })
    const classes = classnames({
      [``${classPrefix}-nav]: true
    })

    return (
      <div className={rootClasses} role="tablist">
        <ul className={classes}>
          {this.getTabs()}
        </ul>
      </div>
    )

  }
}

TabNav.propTypes = {
  classPrefix: PropTypes.string,
  panels: PropTypes.node,
  activeIndex: PropTypes.number
}

class TabPane extends Component {
  render() {
    const { classPrefix, className, isActive, children } = this.props;
    const classes = classnames({
      [className]: className,
      [`${classPrefix}-panel`]: true,
      [`${classPrefix}-active`]: isActive
    })

    return (
      <div role="tabpanel" className={classes} aria-hidden={!isActive}>
        {children}
      </div>
    )

  }
}

TabPane.propTypes = {
  tab: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  order: PropTypes.string.isRequired,
  disable: PropTypes.bool,
  isActive: PropTypes.bool
}

class TabContent extends Component {
  getTabPanes = () => {
    const { classPrefix, activeIndex, panels } = this.props;

    return React.children.map(panels, (child) => {
      if (!child) {return;}

      const order = parseInt(child.props.order, 10);
      const isActive = activeIndex === order;

      return React.cloneElement(child, {
        classPrefix,
        isActive,
        children: child.props.children,
        key: `tabpane-${order}`
      })
    })
  }
  render() {
    const { classPrefix } = this.props;
    const classes = classnames({
      [`${classPrefix}-content`]: true
    })

    return (
      <div className={classes}>
        {this.getTabPanes()}
      </div>
    )
  }
}

TabContent.propTypes = {
  classPrefix: PropTypes.string,
  panels: PropTypes.node,
  activeIndex: PropTypes.number
}

class Tabs extends Component {
  constructor(props) {
    super(props);

    // 定义当前访问索引，如果在 props 中有 activeIndex 那么优先设置
    // 如果有 defaultActiveIndex 则设置为 defaultActiveIndex 的值
    let activeIndex;
    if ('activeIndex' in props) {
      activeIndex = props.activeIndex;
    } else if ('defaultActiveIndex' in props) {
      activeIndex = props.defaultActiveIndex;
    }
    // 同时设置当前索引和之前索引
    this.state = {
      activeIndex,
      prevIndex: activeIndex
    }
  }
  componentWillReceiveProps(nextProps) {
    // 如果 props 更新传入 activeIndex 则直接更新
    if ('activeIndex' in nextProps) {
      this.setState({
        activeIndex: nextProps.activeIndex
      })      
    }
  }
  handleTabClick = (activeIndex) => {
    const prevIndex = this.state.activeIndex;

    // 如果当前 activeIndex 与传入的 activeIndex 不一致
    // 并且 props 中存在 defaultActiveIndex 时，则更新
    if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
      this.setState({
        activeIndex, 
        prevIndex
      })
      // 更新后执行回调函数，抛出当前索引和上一次索引
      this.props.onChange({activeIndex, prevIndex});
    }
  }
  renderTabNav = () => {
    const { classPrefix, children } = this.props;

    return (
      <TabNav
        key="tabBar"
        classPrefix={classPrefix}
        onTabClick={this.handleTabClick}
        panels={children}
        activeIndex={this.state.activeIndex}
      />
    )
  }
  renderTabContent = () => {
    const { classPrefix, children } = this.props;

    return (
      <TabContent
        key="tabcontent"
        classPrefix={classPrefix}
        panels={children}
        activeIndex={this.state.activeIndex}
      />
    )
  }
  render() {
    const { className } = this.props;
    const classes = classnames(className, 'ui-tabs');

    return (
      <div className={classes}>
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    )
  }
}

Tabs.defaultProps = {
  classPrefix: 'tabs',
  onChange: () => {}
}
Tabs.propTypes = {
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  defaultActiveIndex: PropTypes.number,
  activeIndex: PropTypes.number,
  onChange: PropTypes.func
}

export default Tabs;

