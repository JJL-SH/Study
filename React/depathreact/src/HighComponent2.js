import React from 'react';
import { Select } from 'antd';

const SelectOption = Select.Option;

export default class HighComponent2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Select 
        mode="tags"
        style={{width:'100px'}}
        onSelect={(e) => {
          console.log(e)
        }}
      >
        <SelectOption value="1111">111</SelectOption>
        <SelectOption value="2">2</SelectOption>
        <SelectOption value="3">3</SelectOption>
        <SelectOption value="4">4</SelectOption>
      </Select>
    );
  }
}
