import React, { Component } from 'react';

import Banner from './Banner';
import PlanListWrapper from './PlanListWrapper';
import Disclaimer from './Disclaimer';


class PlanWrapper extends Component {

  constructor(){
    super();
  }

  render() {
    return (
        <div className="plan-wrap">
            <Banner/>
            <PlanListWrapper/>
            <Disclaimer/>
        </div>
      );
    }
}

export default PlanWrapper;
