import React, { Component } from "react";
import { connect } from "react-redux";
import UAParser from 'ua-parser-js';

import { getAd } from "../../store/actions/adAction.js";
import { addStats } from "../../store/actions/analyticsAction";

import {
  HorizontalBanner,
  //SquareBanner,
  //VerticalBanner,
  //PlainImage
} from "../../components/ad-generator/templates";

class AdServer extends Component {
  componentDidMount() {
    this.parser = new UAParser([navigator.userAgent]);
    this.props.getAd(this.props.match.params.id);
    this.props.addStats({
      action: "impression",
      browser: this.parser.getBrowser().name,
      os: this.parser.getOS().name,
      device: this.parser.getDevice().type,
      ip: window.location.hostname,
      referrer: document.referrer,
      agreement_id: 2
    });
  }

  recordAction = () => {
    this.props.addStats({
      action: "click",
      browser: this.parser.getBrowser().name,
      os: this.parser.getOS().name,
      device: this.parser.getDevice().type,
      ip: window.location.hostname,
      referrer: document.referrer,
      agreement_id: 2
    });
  };

  render() {
    return (
      <>
        {this.props.ad && (
          <>
            <HorizontalBanner //this needs to render either a horizontal, square, or vertical banner based on the size of the ad
              ad={this.props.ad}
              recordAction={this.recordAction}
            />
          </>
        )}
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
