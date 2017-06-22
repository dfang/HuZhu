import React from 'react';
import { Link } from 'react-router-dom'

const Contract = () => (
    (
        <div className="view-href">
            <Link className="view-convention" to="/agreement/convention">《会员公约》
                <em className="view-arrow"></em>
            </Link>
            <Link className="view-convention" to="/agreement/child-rule">
                《<i>少儿健康互助计划</i>条款》
                <em className="view-arrow"></em>
            </Link>
            <Link className="view-convention" to="/agreement/child-health-requirement">
               《健康要求》
                <em className="view-arrow"></em>
            </Link>
        </div>
    )
);

export default Contract;
