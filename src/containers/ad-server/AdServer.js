import React, { Component } from "react";
import { connect } from "react-redux";

import { getAd } from "../../store/actions/adAction.js";
import { addStats, getStats } from "../../store/actions/analyticsAction";

import {
  HorizontalBanner,
  SquareBanner,
  VerticalBanner
} from "../../components/ad-generator/templates";

class AdServer extends Component {
  componentDidMount() {
    this.props.getAd(this.props.match.params.id);
    this.props.addStats({
      action: "impression",
      browser: navigator.userAgent,
      ip: "127.0.0.1",
      referrer: "google.com",
      agreement_id: 1
    });
  }

  recordAction = () => {
    this.props.addStats({
      action: "click",
      browser: navigator.userAgent,
      ip: "127.0.0.1",
      referrer: "google.com",
      agreement_id: 1
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
    addStats,
    getStats
  }
)(AdServer);
