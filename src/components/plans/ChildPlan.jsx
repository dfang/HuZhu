import React, { Component } from 'react';

import ChildBanner from './ChildBanner';
import VipWrapper from './VipWrapper';
import KnowUs from './KnowUs';
import HelpRule from './HelpRule';
import ServiceGuarantee from './ServiceGuarantee';
import MediaReport from './MediaReport';
import ChildPlanQA from './ChildPlanQA';
import Contract from './Contract';
import ChildBottom from './ChildBottom';


import './child.css';

class ChildPlan extends Component {

  render() {
    return (
        <div>
            <div className="wrapper" >
                <ChildBanner />
                <VipWrapper />
                <div>
                    <div>
                        <div id="child-content">
                            <KnowUs />
                        </div>
                    </div>
                </div>
            </div>
            <HelpRule />
            <ServiceGuarantee />
            {/* <MediaReport /> */}
            <ChildPlanQA />
            <Contract />
            <ChildBottom />
        </div>
      );
    }
}

export default ChildPlan;
