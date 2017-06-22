import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import BasicExample from './TestRoute';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
