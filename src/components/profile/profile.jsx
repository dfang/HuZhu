import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './profile.css';

class Profile extends Component {

  render() {
    return (
        <div>
            <div className="animate-wrap">
                <img className="head-wrap" src="http://shuidi-static.oss-cn-beijing.aliyuncs.com/image/share_logo2.png"/>
                <div className="dim-background"></div>
                <div className="header-user">
                    <div className="user"><img src="http://shuidi-static.oss-cn-beijing.aliyuncs.com/image/share_logo2.png"/></div>
                    <p className="user-nick">尊敬的用户</p>
                </div>
            </div>
            <div className="top-nav-wrap">
                <a href="/ensure">
                    <span className="left-title">我的互助计划</span>
                </a>
                <em className="nav-middle-line"></em>
                <a href="/help-record">查看助人记录</a>
            </div>

            <div className="icons-link">
                <div className="wrap-margin">
                    <div className="links-wrap">
                        <a className="icons__a" href="/recharge">
                            <em className="recharge-icon"></em>
                            <span className="recharge-span">为计划充值</span>
                        </a>
                        <a className="icons__a" href="/join">
                            <em className="for-family-icon"></em>
                            <span>帮家人加入</span>
                        </a>
                        {/* <a className="icons__a" href="javascript:void(0)">
                            <em className="invite-icon"></em>
                            <span className="invite-span">快速问诊</span>
                        </a>
                        <a className="icons__a" href="javascript:void(0)">
                            <em className="check-icon"></em>
                            <span>早起打卡</span>
                        </a> */}
                    </div>
                </div>
            </div>
            <ul className="my-nav">
                <NavItem to='/coupon' text="我的代金券" iconClassName="coupon-icon"/>
                <NavItem to='/requesthelp' className="no-border" text="申请互助金" iconClassName="apply-icon"/>

            </ul>
            <ul className="my-nav">
                <NavItem to='/intro_us' text="了解宝健康" iconClassName="know-us-icon"/>
                <NavItem to='/qa' text="常见问题" iconClassName="question-icon"/>
                <li>
                    <a className="nav-item" href="javascript:void(0)">手机绑定<em className="tip">176****7383</em></a>
                </li>
                <li>
                    <NavLink className="nav-item no-border" to="tel:400-686-1266">联系客服<span className="tel-number">400 686 1266</span></NavLink>
                </li>
            </ul>
            <div className="service-info">
                <p>© 2017 宝健康互助</p>
            </div>
        </div>
    );
  }
}

const NavItem = (props) =>(
    <li>
        <NavLink to={props.to} className={`${props.className} ` + "nav-item"}>
            {props.text}
            <span className={props.iconClassName}></span>
        </NavLink>
    </li>
)

export default Profile;
