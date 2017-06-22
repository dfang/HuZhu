import React, { Component } from 'react';

import './help-rule.css';

class HelpRule extends Component {

  render() {
    return (
        <div className="help-rule">
            <h1>互助规则</h1>
            <ul>
                <li className="plan-people li-border-bottom"><i>加入条件</i> <span>出生后30天-17周岁，身体健康</span> <i className="arrow arrow"></i></li>
                <li className="plan-cover li-border-bottom">事件范围 <span>白血病、癌症等50种大病</span> <i className="arrow arrow"></i></li>
                <li className="plan-num li-border-bottom">最高获捐 <span><em>30万元</em></span> <i className="arrow arrow"></i></li>
                <li className="plan-rule li-border-bottom">分摊规则 <span>单次不超过<em>3元</em>，每年约<em>150元</em></span> <i className="arrow arrow"></i></li>
                <li className="plan-continue li-border-bottom">余额要求 <span>账户余额不低于1元即可</span> <i className="arrow arrow"></i></li>
                <li className="plan-wait li-border-bottom">等待期 <span className="wait-font">180天（为防止带病加入）</span> <i className="arrow arrow"></i></li>
            </ul>
        </div>
      );
    }
}

export default HelpRule;
