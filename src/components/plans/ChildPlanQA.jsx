import React from 'react';
import Collapsible from 'react-collapsible';
import WxDialog from './WxDialog';
import './ChildPlanQA.css'
const ChildPlanQA = () => (
    (
        <div>
            <div className="plan-question">
              <h1>常见问题</h1>
              <ul>
                  <Collapsible openedClassName="open" trigger="Q1 若遇不幸怎么申请互助？">
<<<<<<< HEAD
                      <div>
                        <div className="hidden-content">
                            <em></em>
                            <p>可拨打客服电话400-0719-136申请互助金。处理流程如下：</p>
                            <p className="qus-two">（1）客服了解并登记你的申请；<br/>
                            （2）宝健康互助委托第三方专业公估机构（如商保通等）核实事件真实性；<br/>
                            （3）宝健康互助对事件进行全平台公示；<br/>
                            （4）若公示无异议，宝健康互助将互助金划拨至申请人的个人账户。</p>
                            <p className="qus-two">申请互助金的依据，以公众号“我的宝健康-我的互助计划凭证”中已加入的计划为准。</p>
                        </div>
=======
                      <div className="hidden-content">
                          <em></em>
                          <p>可拨打客服电话400-0719-136申请互助金。处理流程如下：</p>
                          <p className="qus-two">（1）客服了解并登记你的申请；<br/>
                          （2）宝健康互助委托第三方专业公估机构（如商保通等）核实事件真实性；<br/>
                          （3）宝健康互助对事件进行全平台公示；<br/>
                          （4）若公示无异议，宝健康互助将互助金划拨至申请人的个人账户。</p>
                          <p className="qus-two">申请互助金的依据，以公众号或APP“我的宝健康-我的互助计划凭证”中已加入的计划为准。</p>
>>>>>>> xiugaijiantou
                      </div>
                  </Collapsible>

                  <Collapsible openedClassName="open" trigger="Q2 小孩还没有身份证，怎么加入？">
                      <div>
                          <div className="hidden-content">
                              <em></em>
                              <p></p>
                              <p>户口本上有小朋友的身份证号，您可以通过户口本查找。</p>
                              <p></p>
                          </div>
                      </div>
                  </Collapsible>

                  <Collapsible openedClassName="open" trigger="Q3 快到12岁了加入后还能延续多久">
                      <div className="hidden-content">
                          <em></em>
                          <p>本计划加入年龄为出生后30天-12周岁，包含12周岁。如果孩子今年12周岁，可以放心加入。只对12岁以下儿童。</p>
                          <p>年满12周岁后将自动全额退还。或者申请捐献我们指定公益机构。</p>
                      </div>
                  </Collapsible>

                  <Collapsible openedClassName="open" trigger="Q4 宝健康互助是保险吗？">
                      <div className="hidden-content">
                          <em></em>
                          <p>宝健康互助不是保险，而是会员之间互帮互助的公益行动。加入互助社群后，当互助事件发生时，其他会员向符合互助条件的会员进行单向赠予。会员预存金额不是保险费，不能预期获得确定的风险保障回报。</p>
                      </div>
                  </Collapsible>
              </ul>
            </div>
            <div className="qus-tel">
              <div className="que-tel-line">
                <a className="tel-question" href="tel:400-0719-136"><em className="tel-one"></em><span>电话咨询</span></a>
              </div>
            </div>
        <WxDialog />
        </div>
    )
);


export default ChildPlanQA;
