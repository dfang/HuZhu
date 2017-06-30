import React, {Component} from 'react';
import style from '../utils/style';

class RechargePopUp extends Component {

    constructor(props) {
        super(props);
        // this.selectAmountItem = this.selectAmountItem.bind(this);
        this.selectAmountItem = props.chooseAmount.bind(this)
        this.closePopup = this.closePopup.bind(this);
        this.state = {
            showRechargePopup: props.show
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
        console.log(nextProps)

        this.setState({
            showRechargePopup: nextProps.show
        });
        console.log('state is ')
        console.log(this.state)
    }

    closePopup() {
        this.setState({showRechargePopup: false})
    }

    render() {
        return (
            <div style={this.state.showRechargePopup
                ? style.showPopup
                : style.displayNone}>
                <div className="shadow-wrap" style={this.state.showRechargePopup
                    ? style.displayBlock
                    : style.displayNone}></div>
                <div className="mint-popup mint-popup-bottom" style={this.state.showRechargePopup
                    ? style.displayBlock
                    : style.displayNone}>
                    <div className="picker-title">
                        <div className="cancel-button">
                            <a href="javascript:void(0)" onClick={this.closePopup}>取消</a>
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
                            <div className="item" onClick={e => this.selectAmountItem(e)}>
                                <div>
                                    9元
                                </div>
                                <div className="item-subtitle"></div>
                            </div>
                            <div className="item" onClick={e => this.selectAmountItem(e)}>
                                <div>
                                    30元
                                </div>
                                <div className="item-subtitle"></div>
                            </div>
                            <div className="item" onClick={e => this.selectAmountItem(e)}>
                                <div>
                                    50元
                                </div>
                                <div className="item-subtitle"></div>
                            </div>
                            <div className="item" onClick={e => this.selectAmountItem(e)}>
                                <div>
                                    100元
                                </div>
                                <div className="item-subtitle"></div>
                            </div>
                            <div className="item" onClick={e => this.selectAmountItem(e)}>
                                <div>
                                    150元
                                </div>
                            </div>
                            <div className="item" onClick={e => this.selectAmountItem(e)}>
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
    }
}

export default RechargePopUp;
