import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App.js';
import List from './List.js';
import List2 from './List2.js';
import Check from './Check.js';
import DateTest from './DateTest.js';
import Input from './Input.js';
import HighComponent from './HighComponent.js';
import HighComponent2 from './HighComponent2.js';

import 'antd/dist/antd.css'
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/app">App</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/list2">List2</Link></li>
        <li><Link to="/check">Check</Link></li>
        <li><Link to="/DateTest">DateTest</Link></li>
        <li><Link to="/Input">Input</Link></li>
        <li><Link to="/HighComponent">HighComponent</Link></li>
        <li><Link to="/HighComponent2">HighComponent2</Link></li>
      </ul>
      <Route path="/app" component={App}/>
      <Route path="/list2" component={List2}/>
      <Route path="/check" component={Check}/>
      <Route path="/DateTest" component={DateTest}/>
      <Route path="/Input" component={Input}/>
      <Route path="/HighComponent" component={HighComponent}/>
      <Route path="/HighComponent2" component={HighComponent2}/>
    </div>
  </Router>
)

export default BasicExample;