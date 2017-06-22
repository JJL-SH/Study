import React, { Component } from 'react';
import PropTypes from 'prop-types';

function refsHOC(WrappedComponent) {
  return class RefsHOC extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        index: 0
      }
    }
    proc = (wrappedComponentInstance) => {
     this.myComponent = wrappedComponentInstance;
    }
    handleClick = () => {
      let index = ++this.state.index;

      this.setState({index})
      this.myComponent.setState({index})
    }
    render() {
      const props = Object.assign({}, this.props, {ref: this.proc})
      // (e) => {this.xxx = e}
      return (
        <div>
          <button onClick={this.handleClick}>Click</button>
          <WrappedComponent {...props}/>
        </div>
      )
    }
  }
}
class List2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  handleClick = () => {
    console.log(1)
  }
  render() {
    return (
      <button>{this.state.index}</button>
    )
  }
}

export default refsHOC(List2);