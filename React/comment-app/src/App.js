import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" id="test">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
          this.state.list.map((item) => {
            return (<p className="App-intro" key={item}>{item}</p>)
          })
        }
        <h1>
          <button onClick={
            () => {
              window.location.hash = ''
                           window.location.hash = 'test'

              setTimeout(() => {
                }, 500);
            }
          }>btn1</button>
          <button>btn2</button>
        </h1>
      </div>
    );
  }
}

export default App;
