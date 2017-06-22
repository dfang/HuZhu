import React from 'react';

import WxDialog from './WxDialog';

import './qa.css'

const QA = () => (
    (
        <div>
            <div className="plan-question">
              <h1>常见问题</h1>
              <ul>
                <li className="question-pose">Q1 <i>若遇不幸怎么申请互助？</i><i className="question-arrow question-arrow"></i></li>
                <li className="question-pose">Q2 <i>小孩还没有身份证，怎么加入？</i><i className="question-arrow question-arrow"></i></li>
                <li className="question-pose">Q3 快到17岁了加入后还能延续多久？<i className="question-arrow question-arrow"></i></li>
                <li className="question-pose">Q4 宝健康互助是保险吗？<i className="question-arrow question-arrow"></i></li>
              </ul>
            </div>
            <div className="qus-tel">
              <div className="que-tel-line">
                <a className="tel-question" href="tel:400-686-1266"><em className="tel-one"></em><span>电话咨询</span></a>
              </div>
            </div>
        <WxDialog />
        </div>
    )
);


export default QA;
