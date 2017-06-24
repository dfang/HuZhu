import React, { Component } from 'react';
import './App.css';

import { Switch, BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import TabBar from './components/TabBar';
import PlanWrapper from './components/PlanWrapper';
import ChildPlan from './components/plans/ChildPlan';

import Agreement from './components/agreements/Agreements';
import Convention from './components/agreements/Convention';
import ChildRule from './components/agreements/ChildRule';
import ChildHealthRequirement from './components/agreements/ChildHealthRequirement';

import ChildHealthInform from './components/inform/ChildHealthInform';

import NoticeWrapper from './components/NoticeWrapper';
import InviteWrapper from './components/InviteWrapper';
import ProfileWrapper from './components/ProfileWrapper';
import Login from './components/auth/login';
import Join from './components/join/Join';
import Ensure from './components/ensure/Ensure';



import Root from './components/Root';


import QA from './components/QA/QA';
import Intro from './components/intro/Intro';
import Coupon from './components/coupon/Coupon';
import RequestHelp from './components/requestHelp/RequestHelp';


import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import Auth from './components/auth/auth';

const Main = () => (
  <Switch>
      <Route path='/' exact component={PlanWrapper}/>
      <Route path='/plan' exact component={PlanWrapper}/>
      <Route path='/notice' component={NoticeWrapper}/>
      <Route path='/join' component={Join} />
      <Route path='/ensure' component={Ensure} />
      <Route path='/login' component={Login}/>


      <Route path='/plan/child' component={ChildPlan}/>
      <Route path='/plan/health-inform' component={ChildHealthInform}/>

      <Route path='/agreement' exact component={Convention}/>
      <Route path='/agreement/convention' component={Convention}/>
      <Route path='/agreement/child-rule' component={ChildRule}/>
      <Route path='/agreement/child-health-requirement' component={ChildHealthRequirement}/>

      <Route path='/QA' component={QA} />
      <Route path='/intro' component={Intro} />
      <Route path='/coupon' component={Coupon} />
      <Route path='/requesthelp' component={RequestHelp} />

      <Route path='/invite' component={InviteWrapper}/>
      <Route path='/profile' component={ProfileWrapper}/>


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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


// class PrivateRoute extends Route {
//     // constructor() {
//     //     super()
//     //     let isLoggedIn = false
//     // }
//     render() {
//         function isLoggedIn() {
//            return true
//         }
//         if(isLoggedIn()){
//            return <Route path={this.props.path} component={this.props.component} />
//         }else{
//            return <Redirect to="/login"></Redirect>
//         }
//     }
// }
export default App;
