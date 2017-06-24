import React, { Component } from 'react';

import JoinForm from './JoinForm';
import style from '../utils/style';
import './join.css'

class Join extends Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus() {
        console.log('handle focus')
        this.textInput.focus();
        this.refs.relationshipPopup.style = {
          position: 'absolute',
          'z-index': '2002'
        }
    }

    render() {
        return (
            <div className="order-list-wrap">
                <JoinForm />
                <div className="footer-wrap">
                    <div className="button-area">
                        <button className="go-btn">确认加入互助</button>
                    </div>
                    <div className="rule-wrap">
                        我同意 <a href="/agreement/child-health-requirement">《健康要求》</a>
                        <a href="/agreement/convention">《会员公约》</a> 及
                        <a href="/agreement/child-rule">《计划条款》</a>
                    </div>
                </div>
            </div>
          );
    }
}

export default Join;
