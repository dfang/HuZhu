import React from 'react';
import style from '../utils/style';

const RechargePopUp = () => (
    <div>
        <div className="shadow-wrap" style={style.displayNone}></div>
        <div className="mint-popup mint-popup-bottom" style={style.displayNone}>
            <div className="picker-title">
                <div className="cancel-button">
                    <a href="javascript:;">取消</a>
                </div>
                <div className="title">
                    选择充值金额
                </div>
                <div className="submit-button"></div>
            </div>
            <div className="content-wrap">
                <div className="content">
                    <div className="tips">
                        <span>建议充值30元以上，以免余额不足失去受助资格</span>
                    </div>
                    <div className="item">
                        <div>
                            9元
                        </div>
                        <div className="item-subtitle"></div>
                    </div>
                    <div className="item">
                        <div>
                            30元
                        </div>
                        <div className="item-subtitle"></div>
                    </div>
                    <div className="item">
                        <div>
                            50元
                        </div>
                        <div className="item-subtitle"></div>
                    </div>
                    <div className="item">
                        <div>
                            100元
                        </div>
                        <div className="item-subtitle"></div>
                    </div>
                    <div className="item sub-title">
                        <div>
                            150元
                        </div>
                        <div className="item-subtitle">
                            预估年花费
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            300元
                        </div>
                        <div className="item-subtitle"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default RechargePopUp;
