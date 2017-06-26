import React, { Component } from 'react';

let iIndex = 0;

const MyContainer = (WrappedComponent) => (
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      }
    }
    onNameChange = (e) => {
      this.setState({
        name: e.target.value
      })
    }
    handleGetState = () => {
      console.log(this.state.name)
    }
    render() {
      let newProps = {
        value: this.state.name,
        onChange: this.onNameChange
      }
      return (
        <div>
          <WrappedComponent {...this.props} {...newProps}/>
          <button onClick={this.handleGetState}>Get</button>
        </div>
      )
    }
  }
)

class HighComponent extends React.Component {
  render() {
    return (
      <input type="text" name="name" {...this.props}/>
    );
  }
}

export default MyContainer(HighComponent);