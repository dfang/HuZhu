import React from 'react';

const SingleNotice = ({notice}) => (
    <div className="noticeList">
        <div className="head"><span>{notice.date}</span></div>
        <div className="info">
            <img src={notice.avatar}/>
            <ul className="word">
                <li>互助会员：{notice.name}</li>
                <li>互助计划：{notice.plan}</li>
                <li>所需互助金：{notice.amountNeeded}元</li>
            </ul>
        </div>
        <div className="abstract">
            <p>事件概况：</p>
            <p className="content">{notice.summary}</p>
        </div>
    </div>
);
