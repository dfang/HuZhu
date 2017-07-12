import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import Accordion from '../accordion/Accordion';

import './convention.css'

const Convention = ({}) => {
    return (
        <section className="textWrap">
            <ul>
                <Collapsible trigger="一、说明">
                    <li className="convention-hide">
                        <p>1、宝健康互助是武汉守正科技有限公司（以下简称“本公司”）为了帮助实现人民群众“病有所医、病有所养”而设立的网络互助平台。基于“人人为我、我为人人”、“健康我帮人、有难众帮我”的公益理念，互助金的用途聚焦于重大疾病和意外伤残的治疗与康复以及意外身故后其家庭的救助。互助平台包括但不限于宝健康互助网站、APP和微信公众号。本公约是宝健康互助平台和会员（以下或简称“您”）共同遵守的约定。您加入宝健康互助平台前请务必认真阅读本公约的全部内容。本公约一经您确认并同意接受，即视为您已完全同意并接受本公约约束，承诺遵守本公约约定，届时您不应以未阅读本公约的内容主张本公约无效；</p>
                        <p>2、如会员发现任何机构或个人存在违反本公约约定的行为，请及时通知宝健康互助平台;</p>
                        <p>3、加入互助计划的本质，是向互助计划中随机发生的符合互助条件的会员单向的赠予行为，不能预期获得确定的风险保障回报。</p>
                    </li>
                </Collapsible>

                <Collapsible trigger="二、定义">
                  <li className="convention-hide">
                      <p>1、会员：是注册会员和互助会员的统称；</p>
                      <p>2、注册会员：是指具有完全民事权利能力和民事行为能力，在宝健康互助平台填写真实身份信息并完成注册流程的自然人和法人；</p>
                      <p>3、互助会员：是指加入宝健康互助平台发起的互助计划的注册会员或其代为申请加入互助计划的未成年人。未成年人由其监护人代为行使会员各项权利及义务；</p>
                      <p>4、互助计划：是指宝健康互助平台制定的互助会员之间相互帮助的规则，互助会员遵照规则内容享受互助权利，履行互助义务；</p>
                      <p>5、平台活动：是指宝健康互助平台发起的互助计划之外的活动；</p>
                      <p>6、互助申请人：是指发生互助计划约定的情形，需要获得其他会员互助的会员本人或其法定继承人。</p>
                  </li>
                </Collapsible>

                <Collapsible trigger="三、本公约的构成及效力">
                  <li className="convention-hide">
                      <p>1、宝健康互助平台有权根据实际情况适时修订本公约及各互助计划规则，一经修订，将会用修订后的条款版本完全替代修订前的条款版本，并通过原有方式向所有会员公布。变更后的条款一经在宝健康互助平台上公示，即产生法律效力，条款修订后的互助事件及相关一切服务都将按照新条款执行；</p>
                      <p>2、如您对本公约有任何疑问，应向宝健康互助平台咨询。您不应以未阅读或不接受本公约的内容为由，主张本公约无效或要求撤销本公约；</p>
                      <p>3、您应该按照本公约约定行使权利并履行义务。如您不能接受本公约的约定，包括但不限于不能接受修订后的公约，则您应立即停止使用宝健康互助平台针对会员提供的服务。如您继续使用宝健康互助平台针对会员提供的服务，则表示您同意并接受本公约的约束。</p>
                  </li>
               </Collapsible>

               <Collapsible trigger="四、权利义务">
                  <li className="convention-hide">
                      <p>1、作为注册会员，您享有如下权利并承担如下义务：</p>
                      <p>1) 您有权浏览宝健康互助平台公布的互助计划及平台活动信息；</p>
                      <p>2) 您有权参与宝健康互助平台发起的各种互助计划或平台活动；</p>
                      <p>3) 您有义务向宝健康互助平台提供真实准确的身份信息，并承诺您提供的所有材料均真实、准确、完整；</p>
                      <p>4) 您有义务保证不在宝健康互助平台上发布包含诈骗、非法、色情、淫秽、暴力等违反国家法律法规、政策的内容，不发表含有攻击性、侮辱性的言论。</p>
                      <p>2、作为互助会员，您在注册会员的权利义务基础上，进一步享有如下权利并承担如下义务：</p>
                      <p>1) 您有义务根据互助计划规则向同一计划内的会员提供互助，也有权在需要时获得同一互助计划内其他会员的互助;</p>
                      <p>2) 您可获得宝健康互助平台提供的信息、资料、咨询和服务，查看您本人参与互助计划的记录，了解您所参与的互助事件情况，并对该互助事件提出质疑；</p>
                      <p>3) 一旦出现互助申请人通过提供虚假资料和信息而获得互助的情形，您有权委托宝健康互助平台向互助申请人进行追偿；</p>
                      <p>4) 您对宝健康互助平台的计划有批评权、建议权和监督权；</p>
                      <p>5) 您应确保您在宝健康互助平台的注册身份及联系方式信息是真实准确的，否则您将无法获得助；</p>
                      <p>6) 您应及时关注宝健康互助平台的互助事件信息，自行登录查看账户情况，了解互助流程，认真履行义务；不得以未收到通知为由拒绝履行互助计划约定的义务或要求平台承担任何责任；</p>
                      <p>7) 一旦加入互助计划，即视为您授权宝健康互助平台在有互助会员符合互助条件时，代您在个人充值账户里扣除相应金额以用于互助事宜；</p>
                      <p>8) 您应及时关注个人充值账户的资金变动情况，保证充值账户有足够余额确保您履行互助义务；会员充值账户余额低于1元时，将暂时失去受助资格，须在15天内（含）进行充值，如期间充值则恢复互助的权利及义务；否则自动退出计划。退出后重新加入计划，将重新计算等待期；您选择加入不同的计划将按照各计划的规则分别充值；不同计划充值资金不通用，任一计划的账户余额不足不影响其他计划的互助会员权益;</p>
                      <p>9) 如您有一次因为任何原因未能履行互助义务，视为您自动退出互助计划。退出后重新加入计划，将重新计算等待期；</p>
                      <p>10)您应妥善保管在宝健康互助平台的用户名和密码，凡使用您的用户名和密码登陆宝健康互助平台进行的一切操作，均视为您本人的行为，一切责任由您本人承担；</p>
                      <p>11)互助申请人有义务就互助事件提供真实完整的资料，否则将被取消获得互助的资格。互助事件需要委托第三方权威机构进行调查时，调查费用由互助申请方承担；宝健康互助会及时与互助申请人沟通具体费用及打款方式，以实际费用为准；</p>
                      <p>12)您同意宝健康互助平台可单方面判断并决定，如果您违反本公约或互助计划规则，未履行互助义务，或出现损害宝健康互助平台和其他会员的行为，宝健康互助平台可以终止您的密码、账号或某些服务的使用，并可将您在宝健康互助平台服务中留存的任何内容加以移除或删除，同时对您终止部分或全部服务；</p>
                      <p>13)您了解并同意依本公约，无需进行事先通知，宝健康互助平台可在发现任何不适宜内容时，立即关闭或删除您的账户及其账户中所有相关信息及文件，并暂时或永久禁止您继续使用前述文件或户；</p>
                      <p>14)您的账户因前款所述原因被终止使用或因平台停止运作等原因被关闭时，您有权要求宝健康互助平台退回个人充值账户中的现金余额（平台赠送或奖励的余额除外），但无权要求宝健康互助平台或其他会员在您未来发生互助事件时对您发起互助。</p>
                      <p>3、宝健康互助平台享有如下权利，也承担如下义务：</p>
                      <p>1) 宝健康互助平台有权制定各项互助计划并发起会员互助；</p>
                      <p>2) 宝健康互助平台有权对互助会员的互助申请进行审核，并最终决定会员是否可以获得互助；</p>
                      <p>3) 宝健康互助平台有权对互助会员存放于宝健康互助平台上的资金进行管理；</p>
                      <p>4) 在互助会员符合互助条件时，宝健康互助平台有权在会员个人充值账户里代为扣款并将互助资金划拨给互助申请人；</p>
                      <p>5) 在出现互助申请人通过提供虚假资料和信息而获得互助的情形时，宝健康互助平台有义务代全体互助会员向互助申请人要求返还；</p>
                      <p>6) 本公司因客观或政策原因无法继续运作宝健康互助平台，或会员数量低于一定数量时，有权关闭宝健康互助平台，在此情形下，宝健康互助平台必须将会员个人充值账户中的余额全部退还会员；</p>
                      <p>7) 宝健康互助平台涉及到互联网服务，可能会受到各个环节不稳定因素的影响。因此服务存在不可抗力、计算机病毒或黑客攻击、系统不稳定、会员所在位置、会员关机以及其他任何技术、互联网络、通信线路原因等造成的服务中断或不能满足会员要求的风险，互助平台不作任何担保。对因此导致会员不能发送和接受阅读消息、或接发错消息，宝健康互助平台不承担任何责任；</p>
                      <p>8) 如宝健康互助平台的系统发生故障影响服务的正常运行，宝健康互助平台承诺在第一时间内与相关单位配合，及时处理进行修复。但会员因此而产生的损失，宝健康互助平台不承担责任。此外，宝健康互助平台保留不经事先通知为维修保养、升级或其他目的暂停本服务任何部分的权利；</p>
                      <p>9) 宝健康互助平台属于群体类平台，参与互助的会员个人之间除互助事件之外引发的任何纠纷宝健康互助平台将不负责任；</p>
                      <p>10) 会员公然侮辱他人或者捏造事实诽谤他人或平台的，或者进行其他恶意攻击的，宝健康互助平台有权不为该会员提供服务并有权追偿会员给平台造成的损失。</p>
                  </li>
               </Collapsible>

               <Collapsible trigger="五、资金管理">
                  <li className="convention-hide">
                      <p>1、宝健康互助平台有权对会员的充值资金进行管理。充值资金全部交于第三方机构托管或用于银行专用账户管理，如资金产生孳息，宝健康互助平台将用于如下用途：</p>
                      <p>1) 支付联系会员的通讯费用；</p>
                      <p>2) 支付会员充值、向会员划拨款项及资金托管产生的银行费用；</p>
                      <p>3) 支付事件调查、审核的费用；</p>
                      <p>4) 支付会员监督产生的费用（如公证费、监督会员差旅费等）。</p>
                      <p>2、宝健康互助平台在每个会员充值账户划拨互助金时，划拨的金额会精确到分位，如产生超出当次最高互助金总额的部分，计为互助结余，将用于后续发生的互助事件；</p>
                      <p>3、会员通过审核退出互助计划后，可向宝健康互助平台申请提取该计划内的账户余额（平台赠送或奖励余额除外）。提取资金只能通过原支付通道退回。</p>
                  </li>
               </Collapsible>

               <Collapsible trigger="六、公约终止和退出公约">
                  <li className="convention-hide">
                      <p>1、以下任一情形出现，本公约即终止:</p>
                      <p>1）本公司因各种原因而终止宝健康互助平台运作的；</p>
                      <p>2）不可抗力、政策因素致本公约终止的。</p>
                      <p>2、以下任一情形出现，您即退出本公约:</p>
                      <p>1）您违反了国家法律法规、政策、本公约或宝健康互助平台发布的各类规则，宝健康互助平台停止为您提供服务的；</p>
                      <p>2）您本人不同意接受本公约约定或宝健康互助平台发布的各类规则的；</p>
                      <p>3）您不符合本公约约定的会员资格的。</p>
                      <p>3、本公约终止或您退出本公约，不影响您受本公约约束时所做的行为应承担的义务和责任。</p>
                  </li>
                </Collapsible>

                <Collapsible trigger="七、公约解释权">
                  <li className="convention-hide">
                      <p>本公约的解释权归武汉守正科技有限公司及宝健康互助平台所有。</p>
                  </li>
                </Collapsible>
            </ul>

        </section>
    );
}

export default Convention;
