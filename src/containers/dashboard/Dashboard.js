import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";

import { getOfferAnalytics } from "../../store/actions/analyticsAction.js";
import { getUserOffers } from "../../store/actions/offersAction.js";
import { getUserData } from "../../store/actions/authAction.js";
import { getAgreements } from "../../store/actions/agreementsAction.js";
import { getUserNotifications } from "../../store/actions/notificationsAction.js";
import privateRoute from "../auth-HOC";
import DashboardLeft from "../../components/dashboard/dashboard-left/DashboardLeft.js";
import TopNav from "../../components/dashboard/dashboard-top/DashboardTop.js";
import ChatWidget from "../../components/chat-widget/ChatWidget.js";
import Analytics from "./analytics/Analytics.js";
import AdGenerator from "./ad-generator/AdGenerator.js";
import Offers from "./offers/Offers.js";
import Settings from "./settings/Settings.js";

const DashboardContainer = styled.div`
  display: flex;
  background-color: #f1f1f1;
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
    this.props.getAgreements();
    this.props.getOfferAnalytics(this.state.currentOffer);
    this.analyticsInterval = setInterval(() => {
      if (this.state.currentOffer) {
        this.props.getOfferAnalytics(this.state.currentOffer);
      } else {
        return null;
      }
    }, 15000);

    this.props.getUserNotifications();
    this.notificationsInterval = setInterval(() => {
      this.props.getUserNotifications();
    }, 15000);
  }

  componentWillUnmount() {
    clearInterval(this.analyticsInterval);
    clearInterval(this.notificationsInterval);
  }

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
            agreements={this.props.agreements}
            userNotifications={this.props.userNotifications}
            isLoadingAnalytics={this.props.isLoading_analytics}
            isLoadingAds={this.props.isLoading_ads}
            isLoadingAgreements={this.props.isLoading_agreements}
            isLoadingOffers={this.props.isLoading_offers}
            isLoadingStripe={this.props.isLoading_stripe}
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
            <Route
              path="/dashboard/offers"
              render={props => (
                <Offers {...props} currentUser={this.props.currentUser} />
              )}
            />
            <Route
              path="/dashboard/settings"
              render={props => (
                <Settings {...props} currentUser={this.props.currentUser} />
              )}
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
    userNotifications: state.notificationsReducer.userNotifications,
    currentUser: state.authReducer.currentUser,
    offerAnalytics: state.analyticsReducer.offerAnalytics,
    agreements: state.agreementsReducer.agreements,
    isLoading_analytics: state.analyticsReducer.isLoading,
    isLoading_ads: state.adReducer.isLoading,
    isLoading_agreements: state.agreementsReducer.isLoading,
    isLoading_offers: state.offersReducer.isLoading,
    isLoading_stripe: state.stripeReducer.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    getOfferAnalytics,
    getUserOffers,
    getUserData,
    getAgreements,
    getUserNotifications
  }
)(privateRoute(Dashboard));
