import React from 'react';
import MyContainer from './MyContainer.js';

export default class HighComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MyContainer 
          name="1"
        />
      </div>
    );
  }
}
