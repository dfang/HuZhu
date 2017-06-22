import React, { Component } from 'react';

import './vip-wrapper.css';

class VipWrapper extends Component {

  render() {
    return (
        <div className="vip-wrap">
            <div className="vip-info">
                <span><p className="info-num">268215</p>
                   <p className="info-font">已加入会员(人)</p>
                </span>

                <em className="vip-info-border"></em>

                <span>
                    <p className="info-num">2311</p>
                    <p className="info-font">近3日新增(人)</p>
                </span>

            </div>
        </div>
      );
    }
}

export default VipWrapper;
