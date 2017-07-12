import React, { Component } from 'react';

import './service-guarantee.css';

class ServiceGuarantee extends Component {

  render() {
    return (
        <div className="service-guarantee">
            <h1>服务保障</h1>
            <div className="service-guarantee-content">
                <span className="service-content-msg">
                    <em className="service-trust"></em>
                    <p className="content-left-title">平台可靠</p>
                    <p></p>
                    <p className="content-left-info">腾讯、IDG资本战略投资</p>
                </span>
                <span className="service-content-msg">
                    <em className="service-safe"></em>
                    <p className="content-left-title">资金安全</p>
                    <p></p>
                    <p className="content-left-info">资金存管第三方公益基金，专款专用指定救助打款</p>
                </span>
            </div>
            <div className="service-guarantee-content">
                <span className="service-content-msg">
                    <em className="service-full-child"></em>
                    <p className="content-left-title">事件真实</p>
                    <p></p><p className="content-left-info">商保通等公估机构专业核实</p>
                </span>
                <span className="service-content-msg">
                    <em className="service-trans"></em>
                    <p className="content-left-title">流程透明</p><p></p>
                    <p className="content-left-info">互助全程公示，全员监督</p>
                </span>
            </div>
        </div>
      );
    }
}

export default ServiceGuarantee;
