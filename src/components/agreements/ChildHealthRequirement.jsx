import React from 'react';
import PropTypes from 'prop-types';

import './ChildHealthRequirement.css'

const ChildHealthRequirement = ({}) => (
    <div className="work-ask-wrap">
        <h1>健康要求</h1>
        <div>
            <h2><em>一、</em> <p><b>过去三年内</b>，未曾因疾病进行手术治疗，或连续住院≥15天，或服药≥3个月；</p></h2>

            <h2 className="no-border"><em>二、</em> <p>目前或既往未患有以下重大疾病：</p></h2>
            <div className="ask-msg">
                <p>肿瘤（包括恶性肿瘤、脑部肿瘤、白血病，但已经确诊为良性息肉、囊肿、结节和赘生物且已治愈的除外）、病理学描述为癌前病变的肿瘤、心脑血管疾病、冠心病、心肌病、主动脉疾病、肝硬化，急/慢性肾炎、慢性阻塞性肺疾病、支气管哮喘（重度或重度以上）、糖尿病、癫痫、特定传染病（鼠疫、霍乱、病毒性肝炎、痢疾、艾滋病、梅毒、流行性出血病、狂犬病、炭疽、黑热病、疟疾、登革热、人感染高致病禽流感、传染性非典型肺炎、甲型H1N1流感、MERS和埃博拉出血热）、再生障碍性贫血、精神科疾病（含癫痫）、智力发育不全，先天性疾病或者遗传性疾病、智力发育不全以及身体残障（含严重3度烧伤）等；</p>
            </div>

            <h2 className="no-border last-title"><em>三、</em> <p><b>过去六个月内</b>，未曾出现下列不明原因的症状或不适：</p></h2>
            <p className="last-info">体重减轻超过5公斤(非健身或减肥原因)、不明原因的出血点或瘀块、反复鼻或牙龈出血，身体出现肿块、包块、结节、咯血、呕血、便血、血尿、淋巴结肿大，经检查显示需要进一步的检查、治疗或随访。</p>

        </div>
    </div>
);


export default ChildHealthRequirement;
