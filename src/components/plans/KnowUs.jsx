import React, { Component } from 'react';

import './know-us.css'

class KnowUs extends Component {
  render() {
    return (
        <div className="know-us">
            <h1>了解互助</h1>
            <div className="know-us-font">
                <p>你知道吗？</p>
                <p>儿童大病治疗费用平均10-30万元，甚至更多。</p>
            </div>
            <div className="know-us-icon">
                <span><i className="know-us-one"></i> <p>医保报销少</p></span>
                <span><i className="know-us-two"></i> <p>花费多年积蓄</p></span>
                <span><i className="know-us-three"></i> <p>家庭收入大减</p></span>
            </div>
            <div className="know-us-info">
                <p>预捐9元加入互助，帮助他人，保护自己</p>
                <p className="know-us-info__span">有人需要帮助时，大家协力相助，每人分摊不超过3元</p>
            </div>
            <div className="know-us-img">
                <div className="know-img-wrap">
                    <span className="know-us-left__span"><i className="know-img-one"></i> <p className="know-font">受捐30万元</p> <p>如果有10万会员</p> <em className="know-img-left"></em> <p className="know-us-left__bold">每人仅需要付出3元</p></span>
                    <span className="know-us-right__span"><i className="know-img-two"></i> <p className="know-font">受捐30万元</p> <p>如果有100万会员</p> <em className="know-img-right"></em> <p className="know-us-left__bold">每人仅需要付出0.3元</p></span>
                </div>
            </div>
        </div>
      );
    }
}

export default KnowUs;
