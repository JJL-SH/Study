import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.p.innerHTML = '<b>strong</b>';
  }

  render() {
    return (
      <div>
        <p ref={(e) => {this.p = e}} />
      </div>
    )
  }
}
