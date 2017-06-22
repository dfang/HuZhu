import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import TabBar from './components/TabBar';

import registerServiceWorker from './registerServiceWorker';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom'

import './index.css';

ReactDOM.render(<BrowserRouter><div><App /><TabBar /></div></BrowserRouter>, document.getElementById('app'));
registerServiceWorker();
