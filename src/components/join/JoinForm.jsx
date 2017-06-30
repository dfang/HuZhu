import React, {Component} from 'react';
import RechargePopUp from './RechargePopUp';
import RelationshipPopup from './RelationshipPopup';
import style from '../utils/style';
import './popup.css';


class JoinForm extends Component {

    constructor(props) {
        super(props);
        this.showRelationshipPopup = this.showRelationshipPopup.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.closePopup = this.closePopup.bind(this);
        this.selectRelationshipItem = this.selectRelationshipItem.bind(this);
        this.selectAmountItem = this.selectAmountItem.bind(this);
        this.state = {
            showRelationshipPopup: false,
            showRechargePopup: false,
            relationship: "",
            amount_to_charge: ""
        }
    }

    showRelationshipPopup(e) {
        console.log('show relationshipPopup')
        e.preventDefault();
        console.log(this.relationshipPopup)
        this.setState({
            showRelationshipPopup: true
        })
    }

    showRechargePopup(e){
        console.log('show RechargePopUp')
        e.preventDefault();
        this.setState({
            showRechargePopup: true
        })
    }

    componentDidUnMount() {
        console.log('state in componentDidUnMount is ')
        console.log(this.state)
    }

    closePopup() {
        this.setState({
            showRelationshipPopup: false,
            showRechargePopup: false
        })
    }

    selectRelationshipItem(e) {
        console.log('selectRelationshipItem')
        console.log(e)
        this.setState({
            relationship: e.target.innerText
        });
        console.log(this)
        console.log(this.state)
        this.closePopup();
    }

    selectAmountItem(e) {
        console.log(e.target.innerText)
        this.setState({
            amount_to_charge: e.target.innerText
        });
        console.log(this);
        console.log(this.state);
        this.closePopup();
    }

    handleSubmit() {
        console.log('submit');
        console.log(this)
        console.log(this.name)

        let plan = {
            name: this.name.value,
            relationship: this.relationship.value,
            identity_card: this.identity_card.value,
            amount_to_charge: this.amount_to_charge.value
        }

        console.log(plan)
    }

    render() {
        return (
            <div className="order-list">
                <div className="number-title">
                    <div className="add-number">
                        第 1 位
                    </div>
                </div>
                <div className="list-wrap">
                    <div className="form-area">
                        <label>姓&nbsp;&nbsp;名</label>
                        <input className="input-crl name-area" ref={(input) => {
                            this.name = input;
                        }} placeholder="为谁加入，请输入TA的姓名" type="text"/>
                    </div>
                    <div className="form-area" onClick={e => this.showRelationshipPopup(e)}>
                        <label>关&nbsp;&nbsp;系</label>
                        <input className="input-crl form-span" ref={(input) => {
                            this.relationship = input;
                        }} value={this.state.relationship} placeholder="TA是我的" readOnly="readonly"/>
                        <div className="select-right">
                            <span className="arrow-icon"></span>
                        </div>
                    </div>
                    <div className="form-area">
                        <label>身份证</label>
                        <input className="input-crl" ref={(input) => {
                            this.identity_card = input;
                        }} placeholder="输入身份证号（忘记可不填）" type="text"/>
                    </div>
                    <div className="form-area" onClick={e => this.showRechargePopup(e)}>
                        <label>充&nbsp;&nbsp; 值</label>
                        <input className="input-crl recharge__span from-span" ref={(input) => {
                            this.amount_to_charge = input;
                        }} value={this.state.amount_to_charge} placeholder="选择充值金额" readOnly="readonly"/>
                        <div className="select-right">
                            <span className="arrow-icon"></span>
                        </div>
                    </div>


                    <RelationshipPopup show={this.state.showRelationshipPopup} chooseRelationship={this.selectRelationshipItem} />

                    <RechargePopUp show={this.state.showRechargePopup} chooseAmount={this.selectAmountItem} />
                </div>
                <div className="footer-wrap">
                    <div className="button-area">
                        <button className="go-btn" name="xxx" onClick={this.handleSubmit}>确认加入互助</button>
                    </div>
                    <div className="rule-wrap">
                        我同意
                        <a href="/agreement/child-health-requirement">《健康要求》</a>
                        <a href="/agreement/convention">《会员公约》</a>
                        及
                        <a href="/agreement/child-rule">《计划条款》</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default JoinForm;
