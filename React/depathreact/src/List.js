import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    let { onChange, value, checked } = this.props;

    return (
      <li>
        <input
          type="checkbox" 
          checked={checked}
          onChange={() => {onChange(this.props)}}
        />
        <span>{value}</span>
      </li>
    )
  }
}

ListItem.defaultProps = {
  value: '',
  checked: false
}

function ListTitle({title}) {
  return (
    <h2><b>{title}</b></h2>
  )
}

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list.map((item) => ({
        value: item.value,
        checked: item.checked
      }))
    }
  }
  onItemChange = (item) => {
    let list = this.state.list.map((prevItem) => ({
      value: prevItem.value,
      checked: prevItem.value === item.value ? !prevItem.checked : prevItem.checked
    }))

    this.setState({ list })
  }
  render() {
    return (
      <div>
        <ListTitle title={this.props.title}/>
        <ul>
          {
            this.state.list.map((item, index) => (
              <ListItem 
                key={`list-${index}`} 
                value={item.value}
                checked={item.checked}
                onChange={this.onItemChange}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

ListContainer.defaultProps = {
  title: '',
  list: []
}
class List extends Component {
  render() {
    return (
      <ListContainer
        title="Test List"
        list={[{value:1,checked:false},{value:2,checked:false}]}
      />
    )
  }
}

export default List;