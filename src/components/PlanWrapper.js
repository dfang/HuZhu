import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Banner from './plans/Banner';
import PlanListWrapper from './plans/PlanListWrapper';
import Disclaimer from './plans/Disclaimer';
import ChildPlan from './plans/ChildPlan';
import ChildHealthInform from './inform/ChildHealthInform';

import './plans/ChildPlan.css';

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
