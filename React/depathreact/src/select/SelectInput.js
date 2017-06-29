import React, { Component } from 'react';
import { Icon, Input } from 'antd';

class SelectInput extends Component {
  render() {
    const { selectedItem, isActive, onClickHeader, placeholder } = this.props;
    const { text } = selectedItem;

    return (
      <div>
        <div onClick={onClickHeader}>
          <Input
            type="text"
            value={text}
            placeholder={placeholder}
            disabled
          />
          <Icon className={isActive} name="angle-down" />
        </div>
      </div>
    )
  }
}

const searchInput = (WrappedComponent) => {
  return class SearchDecorator extends Component {
    constructor(props) {
      super(props);
    }
    handleSearch = (keyword) => {
      this.setState({
        data: this.props.data,
        keyword
      });
      this.props.onSearch(keyword);
    }
    render() {
      const { data, keyword } = this.props;

      return (
        <WrappedComponent 
          {...this.props}
          data={data}
          keyword={keyword}
          onSearch={this.handleSearch}
        />
      )
    }
  }
}

const asyncSelectDecorator = (WrappedComponent) => {
  return class AsyncSelectDecorator extends Component {
    componentDidMount() {
      const { url, params } = this.props;

      fetch(url, {params}).then((data) => {
        this.setState({data})
      })
    }
    render() {
      return (
        <WrappedComponent
          {...this.props}
          data={this.state.data}
        />
      )
    }
  }
}

const FinalSelector = compose(asyncSelectDecorator, searchDecorator, selectedItemDecorator)(Selector);

class SearchSelect extends Component {
  render() {
    return (
      <FinalSelector {...this.props}>
        <SelectInput />
        <SearchInput />
        <List />
      </FinalSelector>
    )
  }
}