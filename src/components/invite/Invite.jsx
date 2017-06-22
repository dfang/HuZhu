import React, { Component } from 'react';

import { ActivityBanner, ActivityAvatar, ActivityAvatarScroll, ActivityFooter } from './Activity';
import InviteRule from './InviteRule';
import './invite.css';

class Invite extends Component {

  render() {
    return (
        <div className="activity-invite">
            <ActivityAvatar/>
            <ActivityBanner/>
            <ActivityAvatarScroll/>
            <ActivityFooter/>
            <InviteRule/>
        </div>

      );
    }
}

export default Invite;
