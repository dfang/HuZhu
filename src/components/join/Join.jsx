import React, { Component } from 'react';

import JoinForm from './JoinForm';
// import RechargePopUp from './RechargePopUp';
import RelationshipPopup from './RelationshipPopup';

import style from '../utils/style';
import './join.css'

class Join extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="order-list-wrap">
                {/* <JoinForm RelationshipPopup={RelationshipPopup} RechargePopUp={RechargePopUp}/> */}
                <JoinForm />
            </div>
          );
    }
}

export default Join;
