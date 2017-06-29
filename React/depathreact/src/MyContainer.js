import React, { Component } from 'react';
import { DatePicker } from 'antd';

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
  disabledDate = (current) => {

    var data = 86400;

    if (current) {
      if (current.valueOf() < (Date.now() - 86400000 * 2) || current.valueOf() > (Date.now() + 86400000 * 2)) {
        return true;
      } else {
        return false;
      }
    }
  }
  render() {
    return (
      <DatePicker 
        disabledDate={this.disabledDate}
      />
    );
  }
}

export default MyContainer(HighComponent);