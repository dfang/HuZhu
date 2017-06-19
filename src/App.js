import React, { Component } from 'react';
import './App.css';

import { Router, Route, Switch } from 'react-router'
import { BrowserRouter, Route, Link } from 'react-router-dom'


import Root from './components/Root';
import TabBar from './components/TabBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Root/>
        <TabBar/>
      </div>
    );
  }
}

export default App;
