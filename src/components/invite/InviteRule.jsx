import React from 'react';
import commonStyle from '../Helper';

const InviteRule = () => (
    <div className="activity-rule_model_list" style={commonStyle.displayNone}>
        <center>
            <h4>活动规则</h4>
        </center>
        <p>1、每邀请1名新用户成功加入，可获得5元奖励；</p>
        <p>2、邀请奖励金额可用于充值计划，不可提现；</p>
        <p>3、被邀请人加入计划时的手机号，或支付账号，或微信账户若与任一曾经加入过计划的会员相同，平台不视其为首次加入计划，不给予邀请人奖励；</p>
        <p>4、若被邀请人关注后取消关注，或者加入计划后又退出该计划，宝健康互助将不发放奖励并有权收回已发放的奖励；</p>
        <p>5、若发现骗取奖励行为，宝健康互助有权取消、收回奖励金额并取消相关会员的会员资格；</p>
        <p>6、宝健康互助保留对此活动的最终解释权。</p>
        <div className="activity-hide_rule">
            <button className="activity-btn activity-hide_rule_btn">关闭</button>
        </div>
    </div>
);

export default InviteRule;
