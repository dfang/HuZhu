import React, { Component } from 'react';

class Banner extends Component {

  constructor(){
    super();
  }

  render() {
    return (
        <div className="banner-img-wrap">
            <div className="icons-wrap">
                <a href="/recharge">
                    <i className="recharge-icon"></i> <span className="recharge__span">为计划充值</span>
                </a>

                <a href="/invite" className="invite-wrap">
                    <i className="invite-icon"></i> <span className="invite-icon__span">邀请有奖</span>
                </a>

                <a href="#">
                    <i className="check-icon"></i> <span>早起打卡</span>
                </a>

                <a href="#">
                    <i className="doctor-icon"></i> <span>快速问诊</span>
                </a>
            </div>

            <a href="#" className="newyear-banner"></a>
        </div>
      );
    }
}

export default Banner;
