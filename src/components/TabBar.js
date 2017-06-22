import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Link } from 'react-router-dom'


class TabBar extends Component {
  constructor(props){
    super();
    var selectedClassName = ""
    if(props.selected){
        selectedClassName = 'tab-item selected'
    }else{
        selectedClassName = 'tab-item'
    }
    this.state = {
        selectedClassName: selectedClassName
    }
  }

  render() {
    return (
        <nav className="bar-tab">
            <Link to="/plan" className={this.state.selectedClassName}>
                <span className="bar-icon bar-ico-a bar-icon"></span>
                <span className="tab-label">互助计划</span>
            </Link>

            <Link to="/notice" className={this.state.selectedClassName}>
                <span className="bar-ico-b bar-icon"></span>
                <span className="tab-label">公示</span>
            </Link>

            <Link to="/invite" className={this.state.selectedClassName}>
                <span className="bar-icon bar-ico-c"></span>
                <span className="tab-label">邀请有奖</span>
            </Link>

            <Link to="/profile" className={this.state.selectedClassName}>
                <span className="bar-icon bar-ico-d"></span>
                <span className="tab-label">我的互助</span>
            </Link>
        </nav>
      );
    }
}

export default TabBar;
