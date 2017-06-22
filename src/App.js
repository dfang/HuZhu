import React, { Component } from 'react';
import './App.css';

import { Switch, BrowserRouter, Route, Link } from 'react-router-dom'

import Root from './components/Root';
import TabBar from './components/TabBar';

import PlanWrapper from './components/PlanWrapper';
import ChildPlan from './components/plans/ChildPlan';

import Agreement from './components/agreements/Agreements';
import Convention from './components/agreements/Convention';
import ChildRule from './components/agreements/ChildRule';
import ChildHealthRequirement from './components/agreements/ChildHealthRequirement';

import ChildHealthInform from './components/inform/child_health_inform';

import NoticeWrapper from './components/NoticeWrapper';
import InviteWrapper from './components/InviteWrapper';

import ProfileWrapper from './components/ProfileWrapper';
import Profile from './components/profile/profile';

import Login from './components/auth/login';


const Main = () => (
  <Switch>
      <Route exact path='/' component={PlanWrapper}/>

      <Route path='/agreement' component={Agreement}>
          <Route path='convention' component={Convention}/>
          <Route path='child-rule' component={ChildRule}/>
          <Route path='child-health-requirement' component={ChildHealthRequirement}/>
      </Route>

      <Route path='/plan/health-inform' component={ChildHealthInform}/>
      <Route path='/plan/child' component={ChildPlan}/>
      <Route path='/plan' component={PlanWrapper}/>

      <Route path='/notice' component={NoticeWrapper}/>
      <Route path='/invite' component={InviteWrapper}/>
      <Route path='/profile' component={ProfileWrapper}/>

      <Route path="/login" component={Login}/>
  </Switch>
)

class App extends Component {
  render() {
    return (
      <div className="root">

             <Main />

      </div>
    );
  }
}

export default App;
