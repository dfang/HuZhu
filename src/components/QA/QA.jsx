import React from 'react';
import Collapsible from 'react-collapsible';

import Accordion from '../accordion/Accordion';
import './qa.css';

const QA = () => (
    <div className="qusWrap">
        <div className="qusWrap_title">
            互助介绍
        </div>
        <div className="quesCtn">
            <Collapsible trigger="什么是宝健康互助？">
                <div className="hiddenCtn">
                    <p className="tabFonts"><em className="tabFonts"></em>宝健康互助是一个真实可靠的互助社群，在这里，一人患病，众人均摊，大家互帮互助。</p>
                </div>
            </Collapsible>

    		    <Collapsible trigger="宝健康互助是保险吗？">
                <div className="hiddenCtn">
                    <p className="tabFonts">宝健康互助不是保险，而是会员之间互帮互助的公益行动。加入互助社群后，当互助事件发生时，其他会员向符合互助条件的会员进行单向赠予。会员预存金额不是保险费，不能预期获得确定的风险保障回报。</p>
                </div>
            </Collapsible>
    	   </div>
    	<div className="qusWrap_title">
    		互助规则
    	</div>
    	<div className="quesCtn">
    		 <Collapsible trigger="若遇不幸怎么申请互助？">
                <div className="hiddenCtn">
                    <p>可拨打客服电话400-0719-136申请互助金。处理流程如下：</p>
                    <p>（1）客服了解并登记你的申请；</p>
                    <p>（2）宝健康互助委托第三方专业公估机构（如商保通等）核实事件真实性；</p>
                    <p>（3）宝健康互助对事件进行全平台公示；</p>
                    <p>（4）若公示无异议，宝健康互助将互助金划拨至申请人的个人账户。</p>
                    <p>申请互助金的依据，以公众号“我的宝健康-我的互助计划凭证”中已加入的计划为准。</p>
                </div>
          </Collapsible>

  		    <Collapsible trigger="什么是等待期？">
              <div className="hiddenCtn">
                  <p className="tabFonts">为了保证绝大多数会员的权益，并尽可能把每个会员的互助支出降到最低，我们不允许有人带病加入计划。</p>
                  <p className="tabFonts">设置等待期，是为了保证每个会员都是以健康的状态加入到互助计划。</p>
              </div>
          </Collapsible>

          <Collapsible trigger="如何扣费？">
              <div className="hiddenCtn">
                  <p className="tabFonts">每个加入计划的用户都有一个宝健康账户，您是几元加入的，您账户里就会有几元钱（如果您是0元加入的，账户里就是1元），当有用户遭遇不幸需要帮助时，所有用户均摊互助金，均摊费用只会从您的宝健康账户里扣除。</p>
              </div>
          </Collapsible>

    	</div>
    	<div className="qusWrap_title">
    		安全保障
    	</div>
    	<div className="quesCtn">
      		<Collapsible trigger="我们参加互助的资金安全吗？">
              <div className="hiddenCtn">
                  <p>（1）会员账户余额归本人所有，只有发生互助时才会扣除相应金额。</p>
                  <p>（2）我们只会扣除您在宝健康互助的账户余额，无法动用您微信钱包或个人银行账户中的资金，请放心加入。</p>
              </div>
          </Collapsible>

      		<Collapsible trigger="互助事件是真实的吗?">
              <div className="hiddenCtn">
                  <p>（1）互助事件由第三方权威公估机构核实，专业调查保证事件真实。宝健康互助委托的公估机构包括上海商保通健康科技有限公司（商保通）、广州市高澜保险公估有限公司（高澜）、深圳市优智聚信息咨询有限公司（调查联盟）、广东衡量行保险公估有限公司（衡量行）。</p>
                  <p>（2）互助事件全平台公示，公示期间所有会员均可提出异议，全员参与监督。</p>
                  <p>（3）万一互助金拨款后发现有欺诈行为，宝健康互助将义务代为追偿。</p>
              </div>
          </Collapsible>
    	</div>
    	<div className="qusWrap_title">
    		加入规则
    	</div>
    	<div className="quesCtn lastQusCtn">
      		<Collapsible trigger="那些儿童可以加入宝健康儿童健康互助？">
              <div className="hiddenCtn">
                  <p className="tabFonts">出生后30天-12周岁，身体健康的儿童。</p>
              </div>
          </Collapsible>

      		<Collapsible trigger="我可以帮其他人加入吗？">
              <div className="hiddenCtn">
                  <p className="tabFonts">可以的。加入时，您可以添加一个或多个会员，填写该会员的姓名、身份证号即可。</p>
              </div>
          </Collapsible>
      		<Collapsible trigger="小孩还没有身份证，怎么加入？">
              <div className="hiddenCtn">
                  <p className="tabFonts">户口本上有小朋友的身份证号，您可以通过户口本查找。</p>
              </div>
          </Collapsible>

      		<Collapsible trigger="加入互助计划后还可以退出吗？">
              <div className="hiddenCtn">
                  <p className="tabFonts">可以。您可以拨打客服电话400-0719-136申请，您的账户余额也会一并退还。但是退出后如果再次加入，将重新计算等待期。</p>
              </div>
          </Collapsible>
        </div>
    </div>
)

export default QA;
