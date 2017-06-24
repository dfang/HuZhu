import React, { Component } from 'react';
import style from '../utils/style';

class RelationshipPopup extends Component {

  constructor(){
    super();
    this.state = { }
  }

  render() {
    return (
        <div ref={(input) => {this.relationshipPopup = input;}}>
            <div className="shadow-wrap" style={style.displayNone}></div>
            <div className="mint-popup mint-popup-bottom" style={style.displayNone}>
                <div className="picker-title">
                    <div className="cancel-button">
                        <a href="javascript:;">取消</a>
                    </div>
                    <div className="title">
                        选择会员与你的关系
                    </div>
                    <div className="submit-button"></div>
                </div>
                <div className="content-wrap">
                    <div className="content">
                        <div className="tips">
                            <span>会员是我的：</span>
                        </div>
                        <div className="item">
                            子女
                        </div>
                        <div className="item">
                            (外)孙子女
                        </div>
                        <div className="item">
                            本人
                        </div>
                        <div className="item">
                            兄弟姐妹
                        </div>
                        <div className="item">
                            其他
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default RelationshipPopup;
