import React from 'react';

import style from '../utils/style';
import './ensure.css';

const Ensure = () => (
    <div className="root">
        <div className="top-bar">
            <a className="family-btn" href="/join"><i className="add-icon"></i>为家人加入计划</a>
            <a className="invite-btn" href="/invite"><i className="invite-icon"></i>邀请好友加入</a>
        </div>
        <div className="blurBg"></div>
        <div className="noitem-wrap">
            <div>
                <h1>您还没有加入任何互助计划哦</h1>
                <p className="tip-font"><i className="tip-icon"></i>找不到已有的保障？</p>
            </div>
        </div>
        <div className="overlay" style={style.displayNone} transition="fade">
            <div className="dialog" style={style.displayNone}>
                <div className="title">
                    <h1>等待期说明</h1>
                    <a className="close-dialog" href="javascript:;"></a>
                </div>
                <p className="alert-fonts">设置等待期的目的是为了防止一些故意的、非正常的行为，导致发生损害广大互助群体利益的情况。会员在等待期内若发生意外，不能发起互助申请。<br/>
                综合意外互助计划的等待期为7天。</p>
                <button className="confirm-button">知道了</button>
            </div>
        </div>
        <div className="overlay" style={style.displayNone} transition="fade">
            <div className="dialog" style={style.displayNone}>
                <div className="title">
                    <h1>等待期说明</h1><a className="close-dialog" href="javascript:;"></a>
                </div>
                <p className="alert-fonts">设置等待期是为了防止已患病或即将患病的人加入。会员在等待期内若不幸患病，不能发起互助申请。<br/>
                中青年抗癌计划、中老年抗癌计划、少儿健康互助计划的等待期为180天。</p><button className="confirm-button">知道了</button>
            </div>
        </div>
        <div className="overlay" style={style.displayNone} transition="fade">
            <div className="dialog" style={style.displayNone}>
                <div className="title">
                    <h1>提示</h1><a className="close-dialog" href="javascript:;"></a>
                </div>
                <p className="tip-alert">您可能使用了其他手机号注册，请联系客服查询信息 <a className="tel-color" href="tel:400-686-1266">400-686-1266</a></p><button className="confirm-button">好的</button>
            </div>
        </div>
    </div>
);

export default Ensure;
