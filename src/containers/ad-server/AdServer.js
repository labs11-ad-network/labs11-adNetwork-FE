import React, { Component } from "react";
import { connect } from "react-redux";
import UAParser from 'ua-parser-js';

import { getAd } from "../../store/actions/adAction.js";
import { addStats } from "../../store/actions/analyticsAction";

class AdServer extends Component {
  
  componentDidMount() {
    this.parser = new UAParser([navigator.userAgent]);
    this.props.getAd(this.props.match.params.id);
    this.props.addStats({
      action: "impression",
      browser: this.parser.getBrowser().name,
      ip: window.location.hostname,
      referrer: document.referrer,
      agreement_id: this.props.match.params.agreement_id
    });
  }

  recordAction = e => {
    this.props.addStats({
      action: "click",
      browser: this.parser.getBrowser().name,
      ip: window.location.hostname,
      referrer: document.referrer,
      agreement_id: this.props.match.params.agreement_id
    });
  };

  render() {
    return (
      <a href={this.props.ad.destination_url} target="_blank" rel="noopener noreferrer">
        <img src={this.props.ad.image} onClick={this.recordAction} alt=""/>
      </a>
    );
  }
}

const mapStateToProps = state => {
  return {
    ad: state.adReducer.servedAd
  };
};

export default connect(
  mapStateToProps,
  {
    getAd,
    addStats
  }
)(AdServer);
