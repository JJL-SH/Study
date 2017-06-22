import React, { Component } from 'react';
import classnames from 'classnames';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      textareaValue: '',
      radioValue: '',
      checkboxValue: [],
      area: 'beijing'
    }
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleTextareaChange = (e) => {
    this.setState({
      textareaValue: e.target.value
    })
  }
  handleRadioChange = (e) => {
    this.setState({
      radioValue: e.target.value
    })
  }
  checkboxCheckedStatus = (value) => {
    return this.state.checkboxValue.includes(value);
  }
  handleCheckboxChange = (e) => {
    let value = e.target.value;
    let { checkboxValue } = this.state;
    let index = ~checkboxValue.indexOf(value);

    index ? checkboxValue.splice(~index, 1) : checkboxValue.push(value);

    this.setState({ checkboxValue });
  }
  handleSelectChange = (e) => {
    const { options } = e.target;
    const area = Object.keys(options).filter((key) => {
      return options[key].selected === true;
    }).map((key) => {
      return options[key].value;
    })

    this.setState({area});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let { value } = this.submitInput;
    console.log(value)
  }
  render() {
    const { inputValue, textareaValue, radioValue, area } = this.state;
    const className = classnames({
      'aaaa': true,
      'bbbb': false,
      'cccc': true,
    })

    return (
      <div className={className}>
        <p>单行输入框：<input type="text" value={inputValue} onChange={this.handleInputChange}/></p>
        <p>多行输入框：<textarea value={textareaValue} onChange={this.handleTextareaChange}></textarea></p>
        <p><input type="radio" value="male" checked={radioValue === "male"} onChange={this.handleRadioChange}/>Male</p>
        <p><input type="radio" value="female" checked={radioValue === "female"} onChange={this.handleRadioChange}/>Female</p>
        <p>
          <input type="checkbox" value="a" checked={this.checkboxCheckedStatus("a")} onChange={this.handleCheckboxChange}/>
          <input type="checkbox" value="b" checked={this.checkboxCheckedStatus("b")} onChange={this.handleCheckboxChange}/>
          <input type="checkbox" value="c" checked={this.checkboxCheckedStatus("c")} onChange={this.handleCheckboxChange}/>
          <input type="checkbox" value="d" checked={this.checkboxCheckedStatus("d")} onChange={this.handleCheckboxChange}/>
          <input type="checkbox" value="e" checked={this.checkboxCheckedStatus("e")} onChange={this.handleCheckboxChange}/>
          <input type="checkbox" value="f" checked={this.checkboxCheckedStatus("f")} onChange={this.handleCheckboxChange}/>
        </p>
        <p>
          <select
            value={area}
            onChange={this.handleSelectChange}
          >
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="guangzhou">广州</option>
          </select>
        </p>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            defaultValue="test"
            ref={(e) => {this.submitInput = e}}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;