import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

import Accordion from '../accordion/Accordion';
import './help-rule.css';

class HelpRule extends Component {
  constructor() {
    super();
  }

  render() {
    let elements = [
        {
            trigger: <li className="plan-people li-border-bottom"><i>加入条件</i> <span>出生后30天-17周岁，身体健康</span> <i className="arrow arrow"></i></li>,
            content: <div className="hidden-ctn"><section id="childPeople" className="plan-info-msg"><em></em> <p className="font-one">1.加入年龄：出生后30天-17周岁</p> <p className="font-one">2.受助年龄：出生后30天-17周岁，年满18周岁后将自动转入中青年抗癌互助计划，继续享受受助资格。</p> <p className="font-one font-bottom">3.为保障公平性，加入者还需要保证加入计划时身体健康。</p> <p className="font-one">4.认同并承诺遵守《宝健康互助会员公约》及计划条款。</p></section></div>
        },
        {
            trigger: <li className="plan-cover li-border-bottom">事件范围 <span>白血病、癌症等50种大病</span> <i className="arrow arrow"></i></li>,
            content: <div className="hidden-ctn"><section id="childCover" className="plan-info-msg"><em data-v-20a544c4=""></em> <p className="font-one">涵盖恶性肿瘤（俗称癌症，包含白血病）、良性脑肿瘤、严重烧伤、重大器官移植、双耳失聪、双目失明等50种重大疾病。详情可查看该页面下方《少儿健康互助计划条款》第十一条11.4。</p></section></div>
        },
        {
            trigger: <li className="plan-num li-border-bottom">最高获捐 <span><em>30万元</em></span> <i className="arrow arrow"></i></li>,
            content: <div className="hidden-ctn"> <section id="childNum" className="plan-info-msg"><em></em> <table className="child-table"> <tbody> <tr><th>项目</th> <th>最高互助金额</th></tr> <tr><td>50种重大疾病</td> <td>30万元</td></tr> <tr><td>低度恶性肿瘤</td> <td>5万元</td></tr> </tbody> </table> <p className="font-one">* 低度恶性肿瘤:经医学专家认定属于预后较好、生存期长、治疗费用低的恶性肿瘤。</p> </section> </div>
        },
        {
            trigger: <li className="plan-rule li-border-bottom">分摊规则 <span>单次不超过<em>3元</em>，每年约<em>150元</em></span> <i className="arrow arrow"></i></li>,
            content: <div className="hidden-ctn"> <section id="planRule" className="plan-info-msg"><em></em> <p className="font-one font-bottom">如有会员不幸患癌，其他会员会均摊帮助，单次均摊不超过3元。</p> <table className="plan-table"> <tbody> <tr> <th>会员总数</th> <th>均摊金额</th> <th>互助金</th> </tr> <tr> <td>5万人</td> <td>3.0元</td> <td>15万元</td> </tr> <tr> <td>10万人</td> <td>3.0元</td> <td>30万元</td> </tr> <tr> <td>30万人</td> <td>1.0元</td> <td>30万元</td> </tr> <tr> <td>100万人</td> <td>0.3元</td> <td>30万元</td> </tr> </tbody> </table> <p className="font-one">说明：</p> <p className="font-one">(1) 如上表，会员数量越多，单次分摊金额越低。</p> <p className="font-one">(2) 会员账户余额归本人所有，只有发生互助时才会扣除相应金额。</p> <p className="font-one">(3) 每年约150元的费用是宝健康互助运算团队基于历史数据进行的预估。随着空气质量、食品安全等影响国民健康的因素的变化，癌症发病率可能会变得更高，相应的年费用可能也会有提升。</p> </section> </div>
        },
        {
            trigger: <li className="plan-continue li-border-bottom">余额要求 <span>账户余额不低于1元即可</span> <i className="arrow arrow"></i></li>,
            content: <div className="hidden-ctn">
                        <section className="plan-info-msg" id="planContinue">
                            <em></em>
                            <p className="font-one font-bottom">为保证会员能及时获得互助金，每位会员的账户余额不得低于1元。</p>
                            <table className="plan-table">
                                    <tbody>
                                            <tr>
                                                    <th className="th-one">余额</th>
                                                    <th>受助资格</th>
                                                    <th>余额状态</th>
                                            </tr>
                                            <tr>
                                                    <td>余额≥30元</td>
                                                    <td><i className="yes-icon"></i></td>
                                                    <td className="continue-left">充足</td>
                                            </tr>
                                            <tr>
                                                    <td>9元≤余额 ＜30元</td>
                                                    <td><i className="yes-icon"></i></td>
                                                    <td className="continue-left">良，建议充值至30元以上，避免频繁充值</td>
                                            </tr>
                                            <tr>
                                                    <td>1元≤余额 ＜9元</td>
                                                    <td><i className="yes-icon"></i></td>
                                                    <td className="continue-left">不足，建议及时充值，以免因余额不足失去受助资格</td>
                                            </tr>
                                            <tr>
                                                    <td>余额 ＜1元</td>
                                                    <td><i className="no-icon"></i></td>
                                                    <td className="continue-left">暂时失去受助资格，您可以在15天内充值以恢复受助资格，否则将自动退出</td>
                                            </tr>
                                    </tbody>
                            </table>
                            <p className="font-one">说明：</p>
                            <p className="font-one">余额低于9元时，我们会通过微信或短信提醒充值。</p>
                        </section>
                    </div>
        },
        {
            trigger: <li className="plan-wait li-border-bottom">等待期 <span className="wait-font">180天（为防止带病加入）</span> <i className="arrow arrow"></i></li>,
            content: <div className="hidden-ctn">
                        <section className="plan-info-msg" id="waitTime">
                                <em></em>
                                <p className="wait-font font-one">设置等待期的目的是为了防止已患病或者即将患病的人加入，即常说的逆选择。</p>
                                <p className="font-one">在等待期内，若患病不可以申请互助金，但须履行分摊义务。等待期过后，会员如不幸罹患癌症，本计划项下的其他互助会员会为其发起互助。</p>
                        </section>
                     </div>
        }
    ]
    return (
        <div className="help-rule">
            <h1>互助规则</h1>
            <Accordion elements={elements} />
        </div>
      );
    }
}

export default HelpRule;
