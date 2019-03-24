import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";

import { getOfferAnalytics } from "../../store/actions/analyticsAction.js";
import { getUserOffers } from "../../store/actions/offersAction.js";
import { getUserData } from "../../store/actions/authAction.js";
import privateRoute from "../auth-HOC";
import DashboardLeft from "../../components/dashboard/dashboard-left/DashboardLeft.js";
import TopNav from "../../components/dashboard/dashboard-top/DashboardTop.js";
import ChatWidget from "../../components/chat-widget/ChatWidget.js";
import Analytics from "./analytics/Analytics.js";
import AdGenerator from "./ad-generator/AdGenerator.js";
import Offers from "./offers/Offers.js";

const DashboardContainer = styled.div`
  display: flex;
  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    .dashboard-view {
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }
`;

class Dashboard extends Component {
  state = {
    currentOffer: ""
  };

  componentDidMount() {
    this.props.getUserData();
    this.props.getUserOffers();
    this.props.getOfferAnalytics(this.state.currentOffer);
    this.analyticsInterval = setInterval(() => {
      if (this.state.currentOffer) {
        this.refreshStats();
      } else {
        return null;
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.analyticsInterval);
  }

  refreshStats = e => {
    this.props.getOfferAnalytics(this.state.currentOffer);
  };

  handleOfferSelect = e => {
    this.props.getOfferAnalytics(e.target.value);
    this.setState({
      currentOffer: e.target.value
    });
  };

  render() {
    return (
      <DashboardContainer>
        <DashboardLeft />
        <div className="main-content">
          <TopNav
            {...this.props}
            handleOfferSelect={this.handleOfferSelect}
            refreshStats={this.refreshStats}
          />
          <div className="dashboard-view">
            <Route
              exact
              path="/dashboard"
              render={props => (
                <Analytics
                  {...props}
                  offerAnalytics={this.props.offerAnalytics}
                />
              )}
            />
            <Route path="/dashboard/offers" component={Offers} />
            <Route
              path="/dashboard/settings"
              render={props => <h1 {...props}>This is the settings view</h1>}
            />
            <Route path="/dashboard/create-ad" component={AdGenerator} />
            <ChatWidget />
          </div>
        </div>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userOffers: state.offersReducer.userOffers,
    currentUser: state.authReducer.currentUser,
    offerAnalytics: state.analyticsReducer.offerAnalytics
  };
};

export default connect(
  mapStateToProps,
  {
    getOfferAnalytics,
    getUserOffers,
    getUserData
  }
)(privateRoute(Dashboard));
