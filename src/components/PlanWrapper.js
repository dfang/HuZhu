import React, { Component } from 'react';

import Banner from './plans/Banner';
import PlanListWrapper from './plans/PlanListWrapper';
import Disclaimer from './plans/Disclaimer';

import './plans/plan.css';

class PlanWrapper extends Component {
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
