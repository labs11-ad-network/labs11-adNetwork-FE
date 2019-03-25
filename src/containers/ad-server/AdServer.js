import React, { Component } from "react";
import { connect } from "react-redux";
import UAParser from 'ua-parser-js';

import { getAd } from "../../store/actions/adAction.js";
import { addStats } from "../../store/actions/analyticsAction";

import AdHoc from "../../components/ad-generator/AdHoc.js";

class AdServer extends Component {
  componentDidMount() {
    this.parser = new UAParser([navigator.userAgent]);
    this.props.getAd(this.props.match.params.id);
    this.props.addStats({
      action: "impression",
      browser: this.parser.getBrowser().name,
      ip: window.location.hostname,
      referrer: document.referrer,
      agreement_id: 1
    });
  }

  recordAction = () => {
    this.props.addStats({
      action: "click",
      browser: this.parser.getBrowser().name,
      ip: window.location.hostname,
      referrer: document.referrer,
      agreement_id: 1
    });
  };

  render() {
    return (
      <>
        <AdHoc ad={this.props.ad} recordAction={this.recordAction}/>
      </>
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
