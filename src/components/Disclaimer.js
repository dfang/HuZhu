import React, { Component } from 'react';

class Disclaimer extends Component {

    constructor(){
        super();
        this.state = { }
    }

    render() {
        return (
            <section className="disclaimer">
                <p >温馨提示：互助社群不是保险</p>
                <p >互助社群是会员间的互助组织，会员不能预期获得刚性赔付</p>
            </section>
            );
        }
}

export default Disclaimer;
