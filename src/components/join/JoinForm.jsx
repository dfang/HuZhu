import React, { Component } from 'react';

import RechargePopUp from './RechargePopUp';
import RelationshipPopup from './RelationshipPopup';
import style from '../utils/style';

import {
        Form,
        FormError,
        Text,
        Select,
        Textarea,
        Checkbox,
        RadioGroup,
        Radio,
        NestedForm
        } from 'react-form';

class JoinForm extends Component {

  constructor(){
    super();
    this.state = { }
  }

  render() {
    return (
        <div className="order-list">
            {/* <div className="number-title">
                <div className="add-number">
                    第 1 位
                </div>
            </div> */}
            <div className="list-wrap">
                <div className="form-area">
                    <label>姓&nbsp;&nbsp;名</label>
                    <input className="input-crl name-area" placeholder="为谁加入，请输入TA的姓名" type="text"/>
                </div>
                <div className="form-area" onClick={this.focus}>
                    <label>关&nbsp;&nbsp;系</label>
                    <input className="input-crl form-span" ref={(input) => { this.textInput = input; }} placeholder="TA是我的" readOnly="readonly"/>
                    <div className="select-right">
                        <span className="arrow-icon"></span>
                    </div>
                </div>
                <div className="form-area">
                    <label>身份证</label>
                    <input className="input-crl" placeholder="输入身份证号（忘记可不填）" type="text"/>
                </div>
                <div className="form-area">
                    <label>充&nbsp;&nbsp; 值</label>
                    <input className="input-crl recharge__span from-span" placeholder="选择充值金额" readOnly="readonly"/>
                    <div className="select-right">
                        <span className="arrow-icon"></span>
                    </div>
                </div>
                <div>
                    <div className="shadow-wrap" style={style.displayNone}></div>
                    <div className="mint-popup mint-popup-bottom" style={style.displayNone}>
                        <div className="picker-title">
                            <div className="cancel-button">
                                <a href="javascript:;">取消</a>
                            </div>
                            <div className="title">
                                从已有会员中选择
                            </div>
                            <div className="submit-button"></div>
                        </div>
                        <div>
                            <div>
                                <span className="not-userlist">当前账户中没有可选的被保障人，返回填写吧</span>
                            </div>
                        </div>
                    </div>
                </div>
                <RelationshipPopup />
                <RechargePopUp />
            </div>
            {/* <div className="add-btn">
                <i className="add-icon"></i> <span className="add-info">为更多家人加入计划</span>
            </div> */}
        </div>
      );
    }
}

export default JoinForm;
