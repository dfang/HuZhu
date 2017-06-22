import React from 'react';

import commonStyle from '../Helper';

const WxDialog = () => (
    (
        <div className="overlay" style={commonStyle.displayNone}>
            <div className="dialog" style={commonStyle.displayNone}>
                <div className="title">
                    <h1>微信咨询</h1>
                    <a href="javascript:;" className="close-dialog"></a>
                </div>
                <div  className="wx-dlg">
                    <div className="wx-dlg-info">
                        <p>第1步：点击微信左上角，关闭当前页面</p>
                        <p>第2步：点击“小键盘”，输入文字或语音</p>
                    </div>
                    <div className="wx-img-wrap">
                        <em></em>
                        <p className="clickUs">点击小键盘，输入您的问题</p>
                    </div>
                </div>
                <div  className="wx-button">知道了</div>
            </div>
        </div>
    )
);

export default WxDialog;
