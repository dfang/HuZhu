import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom'

import Agreement from './Agreements';
import Convention from './Convention';
import ChildRule from './ChildRule';
import ChildHealthRequirement from './ChildHealthRequirement';

import './agreements.css';

class Agreements extends Component {

  render() {
    return (
        <Redirect to='/agreement/convention' />
    );
  }
}

export default Agreements;
