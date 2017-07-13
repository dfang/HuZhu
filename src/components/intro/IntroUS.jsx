import React from 'react';

import './IntroUS.css';

const IntroUS = ({}) => (
    <div className="intro-wrap">
        <div className="intro-header-bg">
            <em className="family-img"></em>
            <div className="video-wrap">
                <a href="http://v.qq.com/x/page/c0313d2ppk0.html">
                <h1>宝健康互助</h1>
                <h1>共御风险，守护健康</h1>
                <p><em>2929589</em>人的信赖之选</p><i className="play-icon"></i> 视频版</a>
            </div>
        </div>
        <div className="info-ctn">
            <h1>互帮互助，共担风险</h1><em className="info-bg"></em>
            <h2>生病有钱治，费用大家摊</h2>
            <p>最高获捐30万元＝100万人x每人0.3元</p>
            <p>最高获捐30万元＝300万人x每人0.1元</p><a className="step-help">互助流程 <i className="arrow-down arrow-down"></i></a>
        </div>

        <div className="info-ctn two-info">
            <h1>互助计划，全家都可加入</h1>
            <a className="info-plan" href="/sd/list/child?channel=wx_h5_menu">
                <h2>少儿健康互助计划<span className="info-sign">给儿女</span></h2>
                <p>覆盖白血病、癌症等50种大病</p>
                <p>出生后30天－12周岁</p>
            </a>
        </div>


        <div className="footer-consult">
            <a href="">电话咨询</a>
            <br/>
            <a href="/sd/question?channel=wx_h5_menu">常见问题</a>
        </div>

        <div className="explainMsg">
            <p>宝健康互助不是保险，但能提供保障</p>
            <p>百万会员互帮互助，共同抵御风险</p>
        </div>
    </div>
);

export default IntroUS;
