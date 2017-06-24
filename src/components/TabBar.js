import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Match, Miss, NavLink } from 'react-router-dom';

class TabBar extends Component {

  render() {
    return (
        <nav className="bar-tab">
            <NavLink to="/plan" exact className="tab-item" activeClassName="selected">
                <span className="bar-icon bar-ico-a bar-icon"></span>
                <span className="tab-label">互助计划</span>
            </NavLink>

            <NavLink to="/notice" className="tab-item" activeClassName="selected">
                <span className="bar-ico-b bar-icon"></span>
                <span className="tab-label">公示</span>
            </NavLink>

            <NavLink to="/invite" className="tab-item" activeClassName="selected">
                <span className="bar-icon bar-ico-c"></span>
                <span className="tab-label">邀请有奖</span>
            </NavLink>

            <NavLink to="/profile" className="tab-item" activeClassName="selected">
                <span className="bar-icon bar-ico-d"></span>
                <span className="tab-label">我的互助</span>
            </NavLink>
        </nav>
      );
    }
}

export default TabBar;
