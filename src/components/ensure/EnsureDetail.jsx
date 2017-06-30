import React from 'react';
import './ensure_detail.css';

var style = {
    displayNone: {
        display: 'none'
    },
    identityCard: {
        display: 'inline',
        listStyle: 'none'
    }
}
const EnsureDetail = () => (
    <div className="meDetails">
        <div className="planDetailWrap">
            <div className="detailUserInfo">
                <ul>
                    <li className="detailHeader">
                        <h1>电子凭证</h1>
                        <p>凭证编号：No.<span>0002716499</span></p>
                    </li>
                    <li className="helpPlan">
                        <p>互助计划：<span>中青年抗癌计划</span></p>
                        <p>最高获捐：<span>30</span>万元</p>
                    </li>
                    <li>被保障人：<span>段访</span>
                        <span className="fixMsg hidden"></span>
                        <a className="edit-icon testing" href="#"></a>
                    </li>
                    <li style={style.identityCard}>
                        <div>
                            <ul>
                                <li className="top-idCard">
                                    身份证号：
                                    <i className="showCard">4211241987******31</i>
                                    <em className="eyeClose"></em>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="joinTime">加入日期：<span>2017年03月14日</span><br/>
                    </li>
                </ul>
            </div>
            <div className="ruleList">
                <a className="" href="/agreement/child-health-requirement"><em>健康要求</em></a>
                <a className="" href="/agreement/child-rule">计划条款</a>
                <a className="" href="/agreement/convention">平台公约</a>
            </div>
            <div className="stautsBalance">
                <ul>
                    <li className="planAmount">
                        <a className="stautsBalance__a" href="#">
                            <span className="status__span">余额：<i>27.02</i>元</span>
                            <div className="stautsAlert balanceArea">
                                <span className="viewDetails">查看余额明细、充值</span> <span className="arrow normal balance"></span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <p className="stautsTips">等待期剩余72天（建议余额：30元以上，以免频繁充值）</p>
            <div className="helpRecord">
                <ul>
                    <li>申请互助<span className="arrow normal"></span></li>
                </ul>
            </div>
            <div className="knowusArea">
                <ul>
                    <li>
                        <a className="" href="#">进一步了解水滴<span className="arrow normal"></span></a>
                    </li>
                    <li>
                        <a className="" href="#">为家人加入计划<span className="arrow normal"></span></a>
                    </li>
                    <li>
                        <a className="" href="#">邀请好友得奖励<span className="arrow normal"></span></a>
                    </li>
                </ul>
            </div>
            <div className="overlay" style={style.displayNone} transition="fade">
                <div className="dialog" style={style.displayNone}>
                    <div className="title">
                        <h1>提示</h1><a className="close-dialog" href="javascript:void(0);"></a>
                    </div>
                    <p className="alert-title"><span>该会员尚未度过等待期，不能申请互助，如缺少医药费可进行筹款</span></p>
                    <div className="button-wrap">
                        <a className="dialog-button" href="#">大病筹款</a> <button className="dialog-button">关 闭</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default EnsureDetail;
