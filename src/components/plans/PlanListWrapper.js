import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PlanListWrapper extends Component {

  constructor(){
    super();
  }

  render() {
    return (
        <div className="plan-list-wrap">
            <div className="joined-bar">
                <p className="list-title">加入互助</p>
                <span className="joined-people"><em> 254.6万</em>人已加入</span>
            </div>
            <section className="plan-list">
                <Link to="/plan/child" className="plan-list-content">
                    <div className="plan-content-top">
                        <span className="plan-content-img">
                          <img src="child.png" className="lazy"/>
                        </span>
                        <span className="plan-content-font">
                            <h1>少儿健康互助计划</h1>
                            <span className="content-font-desc"></span>
                            <p> 白血病、癌症等50种大病</p>
                            <p> 出生后30天-12周岁</p>
                        </span>
                        <button><span> 加入</span></button>
                    </div>
                </Link>
            </section>
        </div>
      );
    }
}

export default PlanListWrapper;
