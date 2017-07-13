import React from 'react';
import Collapsible from 'react-collapsible';

import './ChildRule.css'

const ChildRule = () => (
    <section className="ruleIp-content-wrap">
        <div className="textWrap" id="childIp">
            <h1>少儿健康计划条款</h1>
            <ul>
                <Collapsible trigger="第一条 计划的宗旨">
                    <li className="ipList">
                        <p>武汉守正科技有限公司通过宝健康互助平台设立本互助计划，以自愿加入为前提。本着“我为人人，人人为我”的宗旨，用互联网的方式汇集点滴之力、互帮互助。</p>
                    </li>
                </Collapsible>

                <Collapsible trigger="第二条 加入条件">
                    <li className="ipList">
                     <p>2.1年龄：出生满30天至12周岁(见释义11.1)；<br/>
                        2.2 加入本计划之时身体健康，未患有<b>重大疾病</b>（见释义11.6）且无重大疾病史；<br/>
                        2.3 中华人民共和国公民（仅限中国大陆居民）；<br/>
                        2.4 认同并承诺遵守 <a><b>《宝健康互助会员公约》</b></a>及本计划规则且符合<b>《健康要求》</b>。<br/></p>
                    </li>
                </Collapsible>

                <Collapsible trigger="第三条 计划内容">
                  <li className="ipList">
                   <p>
                      3.1 会员加入本计划180天后（以加入当天0点开始计算）初次发生并被<b>医院</b>（见释义11.2）的<b>专科医生</b>（见释义11.12）<b>首次诊断</b>（见释义11.3）罹患本计划限定的50种<b>重大疾病</b>（见释义11.4），本计划项下的其他会员会为其发起互助；<br/>
                      3.2 罹患本计划限定50种重大疾病的会员，可获得的最高互助金额为人民币30万元；<br/>会员年满12周岁时会员服务终止将自动转入存款账号。或者申请捐献我们指定的公益机构。<br/>
                      3.3 罹患<b>低度恶性肿瘤</b>（见释义11.5）的会员,可获得的最高互助金额为人民币5万元;<br/>
                      3.4 <b>均摊标准：会员资格存续期间，若会员不幸罹患本计划限定的50种重大疾病，</b>计划内的其他会员有义务进行均摊式互助。每人单次均摊上限为3元；<br/>
                      3.5 互助均摊计算精确至分位。如产生超出当次互助总额的部分，计为互助结余，将用于后续发生的互助事件。<br/>
                   </p>
                  </li>
                </Collapsible>


                <Collapsible trigger="第四条 不予互助的情形">
                  <li className="ipList">
                   <p>
                     <b>
                       会员有下列情形之一或因下列情形之一导致会员罹患本计划限定的50种重大疾病的，其他会员没有义务提供互助：<br/>
                        4.1 会员未获得或已丧失会员资格；<br/>
                        4.2 会员在加入本计划时，或在互助事件调查过程提供虚假信息（虚假姓名，虚假联系方式，虚假年龄），刻意隐瞒事实或未履行如实告知义务；<br/>
                        4.3 加入计划前曾经患过重大疾病（见释义11.6）；<br/>
                        4.4 会员主动吸食或注射毒品（见释义11.7）；<br/>
                        4.5 核爆炸、核辐射或核污染；<br/>
                        4.6 会员感染艾滋病病毒（见释义11.10）或患艾滋病期间因疾病导致的恶性肿瘤；<br/>
                        4.7 遗传性疾病（见释义11.8），先天性畸形、变形或染色体异常（见释义11.9）；<br/>
                        4.8 在诊疗过程中发生的医疗事故；<br/>
                        4.9 非法行为；<br/>
                        4.10 在等待期内确诊的重大疾病；<br/>
                        4.11 会员在提出申请前身故。
                      </b>
                    </p>
                  </li>
                </Collapsible>


                <Collapsible trigger="第五条 如何保持会员身份">
                  <li className="ipList">
                     <p>
                        5.1 会员应持续充值保持会员资格。会员充值账户余额低于9元，平台将向会员发出预警。余额预警期间如发生互助事件，会员的余额将用于互助；<br/>
                        <b>5.2 会员账户余额小于1元时将暂时失去受助资格，须在15天内（含）充值，否则将自动退出计划；<br/>
                        5.3 如会员有一次因为任何原因未能履行互助义务，将自动丧失本计划互助资格；<br/>
                        5.4 会员已经获得互助或在等待期内已经确诊罹患癌症等重大疾病，平台将为会员办理退出本计划；</b><br/>
                        5.5 会员可自愿向宝健康互助平台申请退出本计划；<br/>
                        5.6 平台正式受理会员退出申请后，会员资格将被冻结，在调查完毕后，平台将为会员办理退出本计划；<br/>
                        5.7 丧失会员资格后，符合条件重新加入本计划的，等待期自加入时重新计算；<br/>
                        5.8 已经获得过本计划互助的会员不得再次加入相同计划。<br/>
                    </p>
                  </li>
                </Collapsible>

                <Collapsible trigger="第六条 互助申请流程">
                  <li className="ipList">
                    <p>
                       会员不幸罹患本计划限定的50种重大疾病时，互助申请流程如下：<br/>
                        6.1 互助申请人（会员或其法定继承人，下同）在会员首次确诊罹患本计划限定的50种重大疾病之日起15日内通过人工客服等方式通知本平台并提交互助申请表。<b>会员故意或因重大过失未及时通知本平台，致使互助事件的性质、原因、损失程度等难以确定的，对于无法确定的部分不予互助；</b><br/>
                        6.2 互助申请人在宝健康互助平台受理申请后7日内按照宝健康互助平台的要求提交各类互助事件证明材料。<br/>
                    </p>
                  </li>
                </Collapsible>

                <Collapsible trigger="第七条 互助款拨款流程">
                  <li className="ipList">
                    <p>
                      7.1 宝健康互助平台收齐互助事件证明材料后委托独立第三方评估机构或者具有相关专业知识的人员，对互助事件进行评估和鉴定，形成调查结论，有争议或疑难的事件，宝健康互助平台专家进行审定；<br/>
                      7.2 互助事件情况清晰的，审核时间为互助申请人完整提交材料后30个工作日内；情况特别复杂的为60个工作日内；另有约定的按约定内容执行；<br/>
                      7.3 审定意见认为互助事件符合本计划规则的，宝健康互助平台将进行公示，公示期为7天，在公示期间接受其他会员的质询；不符合本计划规则的，宝健康互助平台将告知互助申请人；<br/>
                      7.4 互助事件公示期满5个工作日内，会将互助金一次性划拨至申请人账户，并向本计划全体会员进行划款公示；<br/>
                      7.5 若有会员在公示期间内有依据地对互助事件提出异议，宝健康互助平台根据情况要求互助申请人解释说明或补充提交材料，并对互助事件进行再次审定。
                    </p>
                  </li>
                </Collapsible>

                <Collapsible trigger="第八条 申请互助所需材料">
                  <li className="ipList">

                    <p>会员不幸罹患本计划规定的50种重大疾症，需要提供的互助申请证明材料包括： ：<br/>
                      8.1 会员及互助申请人的<b>有效身份证件</b>（见释义11.11）、亲属关系证明材料<br/>
                      8.2 医院专科医生出具的病历，病理检验报告，血液检查报告及其他科学诊断报告，附有病理学检查结果的临床诊断证明文件；<br/>
                      8.3 会员已支付医疗费的发票复印件；<br/>
                      8.4 如果会员已向宝健康互助平台书面申请互助金，但在实际划拨互助金前身故，互助金将划拨至其法定继承人，法定继承人应提供材料证明其资格；如果有多个法定继承人，应委托一人接收互助金并提供委托公证书；<br/>
                      8.5 宝健康互助平台认为必须提供的与互助事件性质、原因等有关的其他证明和资料；<br/>
                      8.6 以上证明和资料不完整，或者需要进一步确定互助事件的性质、原因的，宝健康互助平台将及时通知互助申请人补充提供有关证明和资料。
                    </p>

                  </li>
                </Collapsible>

                <Collapsible trigger="第九条 信息披露要求">
                  <li className="ipList">

                   <p>
                     9.1 为确认互助事件真实性，会员同意宝健康互助平台向其他会员公示互助申请人的真实身份，事件发生的过程和详细情况，披露申请互助所提供的相关材料；<br/>
                     9.2 对于宝健康互助平台公示的符合本计划规则的互助事件，其他会员可以咨询或合法调查。
                   </p>

                  </li>
                </Collapsible>

                <Collapsible trigger="第十条 其他重要事项">
                  <li className="ipList">
                      <p>
                        <b>10.1 宝健康互助平台不对每次互助的互助金总额做出承诺；</b><br/>
                        10.2 如果参与本互助计划的人数过多，宝健康互助平台有权根据管理的需要，将本计划拆成若干个互助计划，已加入的会员将根据相应的规则自动转入对应的互助计划；<br/>
                        10.3 会员或互助申请人如有伪造材料骗取互助金的行为，宝健康互助平台将单方剥夺其会员资格且终生不得再加入宝健康互助平台；如宝健康互助平台已经为其发起互助且已划拨互助金，则宝健康互助平台有权通过合法手段追回并将其退还给参与本次互助的会员；<br/>
                        <b>10.4 平台将根据实际运营需要调整或修改相关规则（包含但不限于公约、章程等），并将征求会员意见，包括但不限于调研、投票等，规则修改进行公示后即视为生效。会员有义务及时接收并了解相关规则变动的信息，如有疑问可以联系平台咨询；</b><br/>
                        <b>10.5 如会员不同意规则修订，可随时停止使用宝健康互助平台的服务，退出计划并申请退还账户余额（平台赠送或奖励的余额除外）。但不返还以往已分摊的互助金。会员保留会员资格将视为对修改后规则的接受并同意接受规则各项条款的约束；</b><br/>
                        10.6 会员负有自行登录宝健康互助平台查看信息的义务，不能以未收到宝健康互助平台的通知为由要求平台承担任何责任；<br/>
                        10.7 宝健康互助平台属于群体类平台，参与互助的会员个人之间除互助事件之外引发的任何纠纷宝健康互助平台将不负责任；<br/>
                        10.8 会员公然侮辱他人或者捏造事实诽谤他人或平台的，或者进行其他恶意攻击的，宝健康互助平台有权不为该会员提供服务并有权追偿会员给平台造成的损失；<br/>
                        10.9 平台属性为经营性企业，未来可能会因可持续发展的需要向会员收取合理的运营管理费。当前平台处于非盈利试运营阶段，所有经营成本由平台承担，试运营阶段暂定为期两年；<br/>
                        10.10 本条款履行过程中，如会员有争议不能协商解决的，可以达成仲裁协议通过仲裁解决，也可依法直接向法院提起诉讼；<br/>
                        10.11 因不可抗力、政府政策变化导致本条款无法执行时，本计划自行终止，会员账户余额（平台赠送或奖励的余额除外）将返还至会员，<b>不返还以往已均摊的互助金；</b><br/>
                        10.12 本计划规则的解释权归武汉守正科技有限公司及宝健康互助平台所有。
                      </p>
                  </li>
                </Collapsible>

                <Collapsible trigger="第十一条 释义">
                  <li className="ipList">
                    <p>
                      11.1 周岁：指按有效身份证件中记载的出生日期计算的年龄，自出生之日起为零周岁，每经过一年增加一岁，不足一年的不计；<br/>
                      11.2 医院：指中华人民共和国卫生部医院等级分类中的二级合格或者二级合格以上的医院，不包括主要作为康复、护理、疗养、戒酒、戒毒或者相类似的医疗机构；<br/>
                      11.3 首次诊断时间：指首次实施病理组织学检查的方式诊断癌症的取材时间；<br/>
                      11.4 本计划限定的50种重大疾病是指会员在计划期间内经专科医生明确诊断初次罹患下列疾病或初次达到下列疾病状态或在医院初次接受下列手术：<br/>
                      1)恶性肿瘤：指恶性细胞不受控制的进行性增长和扩散，浸润和破坏周围正常组织，可以经血管、淋巴管和体腔扩散转移到身体其它部位的疾病。经病理学检查结果明确诊断，临床诊断属于世界卫生组织《疾病和有关健康问题的国际统计分类》（ICD-10）的恶性肿瘤范畴。 <b>下列疾病不在互助范围内:</b><br/>
                   <b>（1) 原位癌；</b><br/>
                   <b>（2) 相当于Binet分期方案A期程度的慢性淋巴细胞白血病；</b><br/>
                   <b>（3）相当于Ann Arbor分期方案I期程度的何杰金氏病；</b><br/>
                   <b>（4）皮肤癌（不包括恶性黑色素瘤及已发生转移的皮肤癌；</b><br/>
                   <b>（5）TNM分期为T1N0M0期或更轻分期的前列腺癌；</b><br/>
                   <b>（6）感染艾滋病病毒或患艾滋病期间所患恶性肿瘤。</b><br/>
                      2） 急性心肌梗塞：指因冠状动脉阻塞导致的相应区域供血不足造成部分心肌坏死。须满足下列至少三项条件：<br/>
                      （1）典型临床表现，例如急性胸痛等；<br/>
                      （2）新近的心电图改变提示急性心肌梗塞；<br/>
                      （3）心肌酶或肌钙蛋白有诊断意义的升高，或呈符合急性心肌梗塞的动态性变化；<br/>
                      （4）发病90天后，经检查证实左心室功能降低，如左心室射血分数低于50%。<br/>
                      3） 脑中风后遗症：指因脑血管的突发病变引起脑血管出血、栓塞或梗塞，并导致神经系统永久性的功能障碍。 神经系统永久性的功能障碍，指疾病确诊180天后，仍遗留下列一种或一种以上障碍：<br/>
                      （1）一肢或一肢以上肢体机能完全丧失；<br/>
                      （2）语言能力或咀嚼吞咽能力完全丧失；<br/>
                      （3）自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。<br/>
                      4） 重大器官移植术或造血干细胞移植术：<br/>
                      （1）重大器官移植术:指因相应器官功能衰竭，已经实施了肾脏、肝脏、心脏或肺脏的异体移植手术；<br/>
                      （2）造血干细胞移植术:指因造血功能损害或造血系统恶性肿瘤，已经实施了造血干细胞（包括骨髓造血干细胞、外周血造血干细胞和脐血造血干细胞）的异体移植手术。<br/>
                      5） <b>冠状动脉搭桥术（或称冠状动脉旁路移植术）：指为治疗严重的冠心病，实际实施了开胸进行的冠状动脉血管旁路移植的手术。<br/>
                      冠状动脉支架植入术、心导管球囊扩张术、激光射频技术及其它非开胸的介入手术、腔镜手术不在互助范围内。</b><br/>
                      6） 终末期肾病（或称慢性肾功能衰竭尿毒症期）：指双肾功能慢性不可逆性衰竭，达到尿毒症期，经诊断后已经进行了至少90天的规律性透析治疗或实施了肾脏移植手术。<br/>
                      7） 多个肢体缺失：指因疾病或意外伤害导致两个或两个以上肢体自腕关节或踝关节近端（靠近躯干端）以上完全性断离。<br/>
                      8） 急性或亚急性重症肝炎：指因肝炎病毒感染引起肝脏组织弥漫性坏死，导致急性肝功能衰竭，且经血清学或病毒学检查证实，并须满足下列全部条件：<br/>
                      （1）重度黄疸或黄疸迅速加重；<br/>
                      （2）肝性脑病；<br/>
                      （3）B超或其它影像学检查显示肝脏体积急速萎缩；<br/>
                      （4）肝功能指标进行性恶化。<br/>
                      9） 良性脑肿瘤：指脑的良性肿瘤，已经引起颅内压增高，临床表现为视神经乳头水肿、精神症状、癫痫及运动感觉障碍等，并危及生命。须由头颅断层扫描（CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实，并须满足下列至少一项条件:<br/>
                      （1）实际实施了开颅进行的脑肿瘤完全切除或部分切除的手术；<br/>
                      （2）实际实施了对脑肿瘤进行的放射治疗。<br/>
                      <b>脑垂体瘤、脑囊肿、脑血管性疾病不在互助范围内。</b><br/>
                      10）慢性肝功能衰竭失代偿期：指因慢性肝脏疾病导致肝功能衰竭。须满足下列全部条件：<br/>
                      （1）持续性黄疸；<br/>
                      （2）腹水；<br/>
                      （3）肝性脑病；<br/>
                      （4）充血性脾肿大伴脾功能亢进或食管胃底静脉曲张。<br/>
                      <b>因酗酒或药物滥用导致的肝功能衰竭不在互助范围内。</b><br/>
                      11）脑炎后遗症或脑膜炎后遗症：指因患脑炎或脑膜炎导致的神经系统永久性的功能障碍。神经系统永久性的功能障碍，指疾病确诊180天后，仍遗留下列一种或一种以上障碍：<br/>
                      （1）一肢或一肢以上肢体机能完全丧失；<br/>
                      （2）语言能力或咀嚼吞咽能力完全丧失；<br/>
                      （3）自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。<br/>
                      12）深度昏迷：指因疾病或意外伤害导致意识丧失,对外界刺激和体内需求均无反应,昏迷程度按照格拉斯哥昏迷分级（Glasgow coma scale）结果为5分或5分以下，且已经持续使用呼吸机及其它生命维持系统96小时以上。<br/>
                      <b>因酗酒或药物滥用导致的深度昏迷不在互助范围内。</b><br/>
                      13）双耳失聪：指因疾病或意外伤害导致双耳听力永久不可逆性丧失，在500赫兹、1000赫兹和2000赫兹语音频率下，平均听阈大于90分贝，且经纯音听力测试、声导抗检测或听觉诱发电位检测等证实。<br/>
                      14）双目失明：指因疾病或意外伤害导致双眼视力永久不可逆性丧失，双眼中较好眼须满足下列至少一项条件：<br/>
                      （1）眼球缺失或摘除；<br/>
                      （2）矫正视力低于0.02（采用国际标准视力表，如果使用其它视力表应进行换算);<br/>
                      （3）视野半径小于5度。<br/>
                      15）瘫痪：指因疾病或意外伤害导致两肢或两肢以上肢体机能永久完全丧失。肢体机能永久完全丧失，指疾病确诊180天后或意外伤害发生180天后，每肢三大关节中的两大关节仍然完全僵硬，或不能随意识活动。<br/>
                      16）心脏瓣膜手术：指为治疗心脏瓣膜疾病，实际实施了开胸进行的心脏瓣膜置换或修复的手术。<br/>
                      17）严重阿尔茨海默病：指因大脑进行性、不可逆性改变导致智能严重衰退或丧失，临床表现为明显的认知能力障碍、行为异常和社交能力减退，其日常生活必须持续受到他人监护。须由头颅断层扫描（CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实，且自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。<br/>
                      <b>神经官能症和精神疾病不在互助范围内。</b><br/>
                      18）严重脑损伤：指因头部遭受机械性外力，引起脑重要部位损伤，导致神经系统永久性的功能障碍。须由头颅断层扫描（CT）、核磁共振检查（MRI）或正电子发射断层扫描（PET）等影像学检查证实。神经系统永久性的功能障碍，指脑损伤180天后，仍遗留下列一种或一种以上障碍：<br/>
                      （1）一肢或一肢以上肢体机能完全丧失；<br/>
                      （2）语言能力或咀嚼吞咽能力完全丧失；<br/>
                      （3）自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。<br/>
                      19）严重帕金森病：是一种中枢神经系统的退行性疾病，临床表现为震颤麻痹、共济失调等。须满足下列全部条件：<br/>
                      （1）药物治疗无法控制病情；<br/>
                      （2）自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上。<br/>
                      <b>继发性帕金森综合征不在互助范围内。</b><br/>
                        20）严重Ⅲ度烧伤：烧伤程度为Ⅲ度，且Ⅲ度烧伤的面积达到全身体表面积的20％或20％以上。体表面积根据《中国新九分法》计算。<br/>
                        21）严重原发性肺动脉高压：指不明原因的肺动脉压力持续性增高，进行性发展而导致的慢性疾病，已经造成永久不可逆性的体力活动能力受限，达到美国纽约心脏病学会心功能状态分级IV级，且静息状态下肺动脉平均压超过30mmHg。<br/>
                        22）严重运动神经元病：是一组中枢神经系统运动神经元的进行性变性疾病，包括进行性脊肌萎缩症、进行性延髓麻痹症、原发性侧索硬化症、肌萎缩性侧索硬化症。须满足自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上的条件。<br/>
                        23）语言能力丧失：指因疾病或意外伤害导致完全丧失语言能力，经过积极治疗至少12个月（声带完全切除不受此时间限制），仍无法通过现有医疗手段恢复。 <b>精神心理因素所致的语言能力丧失不在互助范围内。</b><br/>
                        24）重型再生障碍性贫血：指因骨髓造血功能慢性持续性衰竭导致的贫血、中性粒细胞减少及血小板减少。须满足下列全部条件：<br/>
                        （1）骨髓穿刺检查或骨髓活检结果支持诊断；<br/>
                        （2）外周血象须具备以下三项条件：<br/>
                        ① 中性粒细胞绝对值≤0.5×109/L；<br/>
                        ② 网织红细胞＜1%；<br/>
                        ③ 血小板绝对值≤20×109/L。<br/>
                        25）主动脉手术：指为治疗主动脉疾病，实际实施了开胸或开腹进行的切除、置换、修补病损主动脉血管的手术。主动脉指胸主动脉和腹主动脉，不包括胸主动脉和腹主动脉的分支血管。<br/>
                        <b>动脉内血管成形术不在互助范围内。</b><br/>
                        26）肾上腺皮质功能减退：指自身免疫性肾上腺炎导致肾上腺萎缩和慢性肾上腺皮质功能减退。必须满足所有以下条件： 明确诊断，符合所有以下诊断标准：<br/>
                        (1)血浆促肾上腺皮质激素(ACTH)水平测定>100pg/ml；<br/>
                        (2)血浆肾素活性、血管紧张素II和醛固酮测定，显示为原发性肾上腺皮质功能减退症；<br/>
                        (3)促肾上腺皮质激素(ACTH)刺激试验显示为原发性肾上腺皮质功能减退症；<br/>
                        (4)已经采用皮质类固醇替代治疗180天以上。<br/>
                        <b>肾上腺结核、HIV感染或艾滋病、感染、肿瘤所致的其它肾上腺皮质功能减退不在互助范围内。</b><br/>
                        27）多发性硬化：多发性硬化症为中枢神经系统白质多灶性脱髓鞘病变，病变有时累及灰质。多发性硬化症必须由我们认可的医院的神经专科医生确诊。必须伴有典型的脱髓鞘症状和运动及感觉功能障碍的证据并有MRI和脑脊液检查的典型改变。<br/>
                        多发性硬化症必须造成神经系统永久性功能损害并且已导致会员自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上持续达180天以上。<br/>
                        28）肌营养不良症：肌营养不良症是一组遗传性肌肉变性坏死性病变，临床特征为与神经系统无关的骨骼肌对称地进行性无力和萎缩，其诊断需同时符合以下条件：<br/>
                        （1）肌电图显示典型肌营养不良症的阳性改变；<br/>
                        （2）血清肌酸磷酸激酶（CPK）升高；<br/>
                        （3）肌肉活检的病理学诊断符合肌营养不良症的肌肉细胞变性、坏死等阳性改变；<br/>
                        （4）疾病确诊180天以后，会员仍完全丧失独立生活能力，无法独立完成六项基本日常生活活动中的三项或三项以上。<br/>
                        29）经输血导致的艾滋病病毒感染：会员感染上人类免疫缺陷病毒（HIV）并且符合下列所有条件：<br/>
                        （1）在经过等待期之后，会员因治疗必需而接受输血，并且因输血而感染HIV；<br/>
                        （2）提供输血治疗的输血中心或医院出具该项输血感染属医疗责任事故的报告，或者法院终审判决为医疗责任；<br/>
                        （3）提供输血治疗的输血中心或医院必须拥有合法经营执照；<br/>
                        （4）受感染的会员不是血友病患者。<br/>
                        <b>任何因其他传播方式（包括性传播或静脉注射毒品等）导致的HIV感染不在本计划互助范围内。<br/>
                        在任何治愈艾滋病或阻止人类免疫缺陷病毒病毒作用的疗法被发现以后，或能防止艾滋病发生的医疗方法被研究出来以后，本计划将不再予以互助。</b><br/>
                        宝健康互助平台必须拥有获得使用会员的血液样本的权利和能够对这些样本进行独立检验的权利。<br/>
                        30）严重幼年型类风湿关节炎：一种幼年发病的慢性关节炎，特点为关节炎发生数月前出现高热和系统性疾病体征。主要临床表现包括：每日高热、迅速消散的皮疹、关节炎、脾肿大、淋巴结病、浆膜炎、体重减轻、嗜中性粒细胞增多、急性时蛋白升高和血清抗核抗体（ANA）及类风湿因子（RF）阴性。<br/>
                        <b>本计划仅对实际接受了膝关节或髋关节置换手术治疗的严重的幼年型类风湿关节炎予以互助。</b><br/>
                        31）肝豆状核变性：由于先天性铜代谢障碍所引起的一种疾病，其特点为肝硬化与双侧脑基底神经节变性同时存在。互助申请须经水滴互助平台认可的专科医生确认并同时具备下列情况：<br/>
                        （1）临床表现包括：进行性加剧的肢体震颤，肌强直，吞咽及发音困难，精神异常<br/>
                        （2）角膜色素环（K-F环）；<br/>
                        （3）血清铜和血清铜蓝蛋白降低，尿铜增加；<br/>
                        （4）食管静脉曲张 ；<br/>
                        （5）腹水。<br/>
                        <b>本疾病不受本互助计划“责任免除”中“遗传性疾病，先天性畸形、变形或染色体异常”的限制。</b><br/>
                        32）急性脊髓灰质炎：是由于脊髓灰质炎病毒感染所致的瘫痪性疾病，临床表现为运动功能损害或呼吸无力。脊髓灰质炎必须明确诊断。我们仅对脊髓灰质炎造成的神经系统功能损害导致会员一肢或一肢以上肢体机能永久完全丧失的情况予以互助。肢体机能永久完全丧失，指疾病确诊180日后，每肢三大关节中的两大关节仍然完全僵硬，或不能随意识活动。<br/>
                        33）急性坏死性胰腺炎：指由专科医生确诊为急性出血坏死性胰腺炎，并已经接受了外科开腹手术治疗，以进行坏死组织清除、坏死病灶切除或胰腺切除。 <b>因饮酒所致的急性出血坏死性胰腺炎或经腹腔镜手术进行的治疗不在互助范围内。</b><br/>
                        34）严重溃疡性结肠炎：本计划所互助的溃疡性结肠炎是指伴有致命性电解质紊乱的急性暴发性溃疡性结肠炎，病变累及全结肠，表现为严重的血便和系统性症状体征，治疗通常采取全结肠切除和回肠造瘘术。溃疡性结肠炎必须根据组织病理学特点诊断，并且会员已经接受了结肠切除和/或回肠造瘘术。<br/>
                        35）慢性复发性胰腺炎：指慢性反复发作的胰腺炎症导致胰腺的广泛纤维化、坏死、弥漫性钙化及假性囊肿形成，造成胰腺功能障碍出现严重糖尿病和营养不良。必须满足以下所有条件：<br/>
                        （1）CT显示胰腺广泛钙化或逆行胰胆管造影（ERCP）显示胰管扭曲、扩张和狭窄；<br/>
                        （2）接受胰岛素替代治疗和酶替代治疗一百八十天以上。<br/>
                      <b>酒精或药物导致的慢性复发性胰腺炎不在互助范围内。</b><br/>
                        36）脑外科手术：会员确已实施全麻下的开颅手术（不包括颅骨钻孔手术和经鼻蝶窦入颅手术）。因外伤而实施的脑外科手术不在互助范围之内。理赔时必须提供由神经外科医生出具的诊断书及手术报告。<br/>
                        37）破裂脑动脉瘤夹闭手术：指因脑动脉瘤破裂造成蛛网膜下腔出血，会员实际接受了在全麻下进行的开颅动脉瘤夹闭手术。脑动脉瘤（未破裂）预防性手术、颅骨打孔手术、动脉瘤栓塞手术、血管内手术及其他颅脑手术不在互助范围内。<br/>
                        38）肾髓质囊性病：肾髓质囊性病的诊断必须同时符合下列要求：<br/>
                        （1）肾髓质有囊肿、肾小管萎缩及间质纤维化等病理改变；<br/>
                        （2）贫血、多尿及肾功能衰竭等临床表现；<br/>
                        （3）诊断须由肾组织活检确定。<br/>
                        <b>其他的肾脏囊性病变不在互助范围内。</b><br/>
                        39）象皮病：指末期丝虫病，其性质为身体组织因血液循环受阻或淋巴管堵塞而肿大。必须由宝健康互助认可的专科医生确诊，且以微丝蚴化验结果阳性确认。<b>因性接触、外伤、手术后的疤痕、充血性心衰竭或先天性淋巴系统不正常等情况引到淋巴水肿均不在此计划的互助范围内。</b><br/>
                        40）严重心肌炎：指心肌局限性或弥漫性的急性或慢性炎症病变，导致心脏功能障碍，达到美国纽约心脏病学会心功能状态分级IV级，且持续至少180天。<br/>
                        41）严重克隆病：克隆病是一种慢性肉芽肿性肠炎，具有特征性的克隆病病理组织学变化。诊断必须由病理检查结果证实。会员所患的克隆病必须已经造成瘘管形成并伴有肠梗阻或肠穿孔。<br/>
                        42）严重冠心病：指经心脏科专科医师根据冠状动脉造影检查结果确诊的三支主要血管（左冠状动脉主干和右冠状动脉，或前降支、左旋支和右冠状动脉）严重狭窄性病变（至少一支血管管腔直径减少75％以上和其他两支血管管腔直径减少60％以上）。<b>前降支、左旋支及右冠状动脉的分支血管的狭窄不作为互助的衡量指标。</b><br/>
                        43）原发性心肌病：指不明原因引起的一类心肌病变，包括原发性扩张型心肌病、原发性肥厚型心肌病及原发性限制型心肌病三种，病变必须已造成事实上心室功能障碍而出现明显的心功能衰竭（指按照美国纽约心脏协会心功能分类标准心功能达四级*），且有相关住院医疗记录显示四级心功能衰竭状态持续至少180天。 本病须经专科医生明确诊断。<b>继发于全身性疾病或其它器官系统疾病造成的心肌病变不在本计划范围内。</b><br/>
                        *美国纽约心脏协会分类标准心功能四级是指有医院的医疗记录显示病人不能进行任何活动，休息时仍有心悸、呼吸困难等心力衰竭表现。<br/>
                        44）硬皮病：是一种以皮肤、血管和内脏器官的进行性、弥漫性纤维化为特点的系统性结缔组织病。须经专科医生根据组织活检和血清学检查结果作出明确诊断并提供下列一项或一项以上内脏器官受累的检查报告及诊疗记录：<br/>
                        肺脏：肺纤维化，已经发展为肺动脉高压、肺心病；<br/>
                        心脏：心室功能受损，至少达到美国纽约心脏病学会心功能状态分级Ⅲ级；<br/>
                        肾脏：肾脏受损，已经出现肾功能不全。<br/>
                     <b>下列疾病不在互助范围内：</b><br/>
                     <b>（1）局部性硬皮病（如：带状硬皮病、硬斑病)；</b><br/>
                     <b>（2）嗜酸性粒细胞性筋膜炎；</b><br/>
                     <b>（3）CREST综合征。</b><br/>
                        45）植物人状态：指由于大脑半球功能障碍导致的反应和意识丧失，但控制呼吸和心跳的脑干功能仍保持。必须由神经科专科医生明确诊断，且必须满足下列全部条件：<br/>
                        （1）丧失对自身或环境的感知；<br/>
                        （2）不能理解和表达语言；<br/>
                        （3）对外界刺激不能作出持续地、可重复地反应；<br/>
                        （4）脑干功能基本保存；<br/>
                        （5）通过相应的神经生理、神经心理测试或影像学检查，排除了其他可治疗的神经或精神障碍。<br/>
                        上述情况必须有至少一个月的病历记录加以证实，且无临床改善。<br/>
                     <b>由于酗酒或滥用药物所致的植物人状态不在互助范围内。</b><br/>
                        46）终末期肺病：是指会员必须经宝健康互助认可的医院的呼吸科专科医师确诊的严重并且永久性的呼吸系统功能损害，其诊断标准包括以下各项：<br/>
                        （1）肺功能测试其FEV1持续低于1升；<br/>
                        （2）动脉血气分析氧分压等于或低于55mmHg；<br/>
                        （3）病人血氧不足必须持续地进行输氧治疗。<br/>
                        47）自体造血干细胞移植手术：指由于患者自身骨髓造血功能异常或为了达到治疗肿瘤的目的，采集患者自己的一部分造血干细胞，分离并深低温保存，再回输给患者使患者的造血功能和免疫功能重新恢复的一种治疗方法。<br/>
                        48）重症肌无力：是指一种神经与肌肉接头部位传递障碍的自身免疫性疾病，临床特征是局部或全身横纹肌于活动时易于疲劳无力，颅神经眼外肌最易累及，也可涉及呼吸肌、下肢近端肌群乃至全身肌肉，须经宝健康互助认可的神经科医师确诊。其诊断必须同时具有下列情况：<br/>
                        （1）经药物、胸腺手术治疗一年以上无法控制病情，丧失正常工作生活自理能力；<br/>
                        （2）出现眼睑下垂，或构音困难、进食呛咳，或由于肌无力累及呼吸肌而致机体呼吸功能不正常的危急状态即肌无力危象；<br/>
                        （3）症状缓解、复发及恶化交替出现，临床接受新斯的明等抗胆碱酯酶药物治疗的病史。<br/>
                        49）非阿尔茨海默病所致严重痴呆：指因阿尔茨海默病以外的脑的器质性疾病造成脑功能衰竭导致永久不可逆性的严重痴呆，临床表现为明显的认知能力障碍、行为异常和社交能力减退。会员自主生活能力完全丧失，无法独立完成六项基本日常生活活动中的三项或三项以上，日常生活必须持续受到他人监护。导致痴呆的疾病必须明确诊断，并且由完整的临床、实验室和影像学检查结果证实。<br/>
                      <b>神经官能症,精神疾病及酒精中毒所致脑损害不在互助范围内。</b><br/>
                        50）嗜铬细胞瘤：是指肾上腺或嗜铬外组织出现神经内分泌肿瘤，并分泌过多的儿茶酚胺类，需要确实进行手术以切除肿瘤。嗜铬细胞瘤的诊断必须由内分泌专科医生确定。<br/>
                      11.5 低度恶性肿瘤:包含但不限于甲状腺乳头状癌、隆突性皮肤纤维肉瘤、卵巢性索间质肿瘤、骨巨细胞瘤，以及其他经医学专家认定属于预后较好、生存期长、治疗费用低的恶性肿瘤；<br/>
                      11.6 重大疾病指：11.4规定的50种重大疾病以及以下疾病 肿瘤（包括恶性肿瘤、脑部肿瘤、白血病，但已经确诊为良性息肉、囊肿、结节和赘生物且已治愈的除外）、病理学描述为癌前病变的肿瘤、心脑血管疾病、冠心病、心肌病、主动脉疾病、急/慢性肾炎、慢性阻塞性肺疾病、支气管哮喘（重度或重度以上）、肝硬化、糖尿病、癫痫、特定传染病（鼠疫、霍乱、病毒性肝炎、痢疾、艾滋病、梅毒、流行性出血病、狂犬病、炭疽、黑热病、疟疾、登革热、人感染高致病禽流感、传染性非典型肺炎、甲型H1N1流感、MERS和埃博拉出血热）、再生障碍性贫血、精神科疾病（含癫痫）、智力发育不全，先天性疾病或者遗传性疾病、智力发育不全以及身体残障（含严重3度烧伤）等； <br/>
                      11.7 毒品：指中华人民共和国刑法规定的鸦片、海洛因、甲基苯丙胺（冰毒）、吗啡、大麻、可卡因以及国家规定管制的其他能够使人形成瘾癖的麻醉药品和精神药品，但不包括由医生开具并遵医嘱使用的用于治疗疾病但含有毒品成分的处方药品；<br/>
                      11.8 遗传性疾病：指生殖细胞或受精卵的遗传物质（染色体和基因）发生突变或畸变所引起的疾病，通常具有由亲代传至后代的垂直传递的特征；<br/>
                      11.9 先天性畸形、变形或染色体异常：先天性畸形、变形或染色体异常指会员出生时就具有的畸形、变形或染色体异常。先天性畸形、变形和染色体异常依照世界卫生组织《疾病和有关健康问题的国际统计分类》（ICD-10）确定；<br/>
                      11.10 艾滋病病毒指人类免疫缺陷病毒，英文缩写为HIV。艾滋病指人类免疫缺陷病毒引起的获得性免疫缺陷综合征，英文缩写为AIDS；<br/>
                      在人体血液或其他样本中检测到艾滋病病毒或其抗体呈阳性，没有出现临床症状或体征的，为感染艾滋病病毒；如果同时出现了明显临床症状或体征的，为患艾滋病；<br/>
                      11.11 有效身份证件：指由中华人民共和国政府主管部门规定的能够证明其身份的证件，如：居民身份证、军官证、警官证、士兵证、户口簿以及中华人民共和国政府主管部门颁发或者认可的有效护照或者其他身份证明文件；<br/>
                      11.12 专科医生：<br/>
                      应当同时满足以下四项资格条件：<br/>
                      1)具有有效的中华人民共和国《医师资格证书》；<br/>
                      2)具有有效的中华人民共和国《医师执业证书》，并按期到相关部门登记注册；<br/>
                      3)具有有效的中华人民共和国主治医师或主治医师以上职称的《医师职称证书》；<br/>
                      4)在二级或二级以上医院的相应科室从事临床工作三年以上。<br/>
                      11.13 本规则未释明的释义以<a>《宝健康互助会员公约》</a>约定为准。<br/>
                    </p>
                  </li>
                </Collapsible>

            </ul>
        </div>
    </section>
);

export default ChildRule;
