import React, { Component } from 'react';

import './profile.css';

class Profile extends Component {

  render() {
    return (
        <div className="root">
            <div className="animate-wrap">
                <img className="head-wrap" src="http://shuidi-static.oss-cn-beijing.aliyuncs.com/image/share_logo2.png"/>
                <div className="dim-background"></div>
                <div className="header-user">
                    <div className="user"><img src="http://shuidi-static.oss-cn-beijing.aliyuncs.com/image/share_logo2.png"/></div>
                    <p className="user-nick">尊敬的用户</p>
                </div>
            </div>
            <a className="my-planlist" href="javascript:void(0)">
                <span className="left-title">我的互助计划</span>
                <span className="right-add">添加 · 管理<em className="arrow-icon"></em></span>
            </a>
            <div className="icons-link">
                <div className="wrap-margin">
                    <div className="links-wrap">
                        <a className="icons__a" href="javascript:void(0)">
                            <em className="recharge-icon"></em>
                            <span className="recharge-span">为计划充值</span>
                        </a>
                        <a className="icons__a" href="javascript:void(0)">
                            <em className="for-family-icon"></em>
                            <span>帮家人加入</span>
                        </a>
                        <a className="icons__a" href="javascript:void(0)">
                            <em className="invite-icon"></em>
                            <span className="invite-span">快速问诊</span>
                        </a>
                        <a className="icons__a" href="javascript:void(0)">
                            <em className="check-icon"></em>
                            <span>早起打卡</span>
                        </a>
                    </div>
                </div>
            </div>
            <ul className="my-nav">
                <li>
                    <a className="nav-item" href="javascript:void(0)">我的代金券<span className="coupon-icon"></span></a>
                </li>
                <li>
                    <a className="nav-item no-border" href="javascript:void(0)">申请互助金<span className="apply-icon"></span></a>
                </li>
            </ul>
            <ul className="my-nav">
                <li>
                    <a className="nav-item" href="javascript:void(0)">了解宝健康<span className="know-us-icon"></span></a>
                </li>
                <li>
                    <a className="nav-item" href="javascript:void(0)">常见问题<span className="question-icon"></span></a>
                </li>
                <li>
                    <a className="nav-item" href="javascript:void(0)">手机绑定<em className="tip">176****7383</em></a>
                </li>
                <li>
                    <a className="nav-item no-border" href="tel:400-686-1266">联系客服<span className="tel-number">400 686 1266</span></a>
                </li>
            </ul>
            <div className="service-info">
                <p>© 2017 宝健康互助</p>
            </div>
        </div>
    );
  }
}

export default Profile;
