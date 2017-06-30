import React, { Component } from 'react';
import style from '../utils/style';

class RelationshipPopup extends Component {

  constructor(props){
    super(props);
    this.state = {
        showRelationshipPopup: props.show
    }
    this.selectRelationshipItem = props.chooseRelationship.bind(this)
    this.closePopup = this.closePopup.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      console.log('componentWillReceiveProps')
      console.log(nextProps)

      this.setState({
          showRelationshipPopup: nextProps.show
      });
      console.log('state is ')
      console.log(this.state)
  }

  closePopup() {
      this.setState({showRelationshipPopup: false})
  }

  render() {
    return (
        <div style={this.state.showRelationshipPopup
            ? style.showPopup
            : style.displayNone}>
            <div className="shadow-wrap" style={this.state.showRelationshipPopup
                ? style.displayBlock
                : style.displayNone}></div>
            <div className="mint-popup mint-popup-bottom" style={this.state.showRelationshipPopup
                ? style.displayBlock
                : style.displayNone}>
                <div className="picker-title">
                    <div className="cancel-button">
                        <a href="javascript:void(0)" onClick={this.closePopup}>取消</a>
                    </div>
                    <div className="title">
                        选择会员与你的关系
                    </div>
                    <div className="submit-button"></div>
                </div>
                <div className="content-wrap">
                    <div className="content">
                        <div className="tips">
                            <span>会员是我的：</span>
                        </div>
                        <div className="item" onClick={e => this.selectRelationshipItem(e)}>
                            子女
                        </div>
                        <div className="item" onClick={e => this.selectRelationshipItem(e)}>
                            (外)孙子女
                        </div>
                        <div className="item" onClick={e => this.selectRelationshipItem(e)}>
                            本人
                        </div>
                        <div className="item" onClick={e => this.selectRelationshipItem(e)}>
                            兄弟姐妹
                        </div>
                        <div className="item" onClick={e => this.selectRelationshipItem(e)}>
                            其他
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default RelationshipPopup;
