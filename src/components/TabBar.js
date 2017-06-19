import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TabBar extends Component {
  constructor(){
    super();
  }

  render() {
    return (
        <nav className="bar-tab">
        	<a href="javascript:;" className="tab-item selected">
        		<span className="bar-icon bar-ico-a bar-icon"></span>
        		<span className="tab-label">互助计划</span>
        	</a>
        	<a href="javascript:;" className="tab-item">
        		<span className="bar-ico-b bar-icon"></span>
        		<span className="tab-label">公示</span>
        	</a>
        	<a href="javascript:;" className="tab-item">
        		<span className="bar-icon bar-ico-c"></span>
        		<span className="tab-label">邀请有奖</span>
        	</a>
        	<a href="javascript:;" className="tab-item">
        		<span className="bar-icon bar-ico-d"></span>
        		<span className="tab-label">我的互助</span>
        	</a>
        </nav>
      );
    }
}

export default TabBar;
