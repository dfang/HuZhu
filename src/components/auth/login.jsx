import React, { Component } from 'react';

import './login.css';

class Login extends Component {

  render() {
    return (
        <div className="login-wrap">
            <div>
                <section className="phone-verify">
                    <div className="phone-input">
                        <input className="phone-input-num" pattern="[0-9]*" placeholder="输入手机号" type="text"/>
                    </div>
                    <div className="phone-input">
                        <input className="phone-input-code" pattern="[0-9]*" placeholder="输入验证码" type="text"/>
                        <a className="get-code" href="javascript:;">获取验证码</a>
                    </div>
                    <p className="phone-tip">收不到验证码？请拨打客服电话<a href="tel:400-0719-136">400-0719-136</a></p>
                </section>
                <a className="verify-button" href="javascript:;">验证</a>
            </div>
        </div>
      );
    }
}

export default Login;
