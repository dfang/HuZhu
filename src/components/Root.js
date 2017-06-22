import React, { Component } from 'react';

import PlanWrapper from './PlanWrapper';

class Root extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div className="root">
        <PlanWrapper />
      </div>
      );
    }
}

export default Root;
