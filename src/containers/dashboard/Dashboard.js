import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";

import { getOffers } from "../../store/actions/offersAction.js";
import { getUserData } from "../../store/actions/authAction.js";
import { getAgreements } from "../../store/actions/agreementsAction.js";
import { getAnalytics } from "../../store/actions/analyticsAction.js";
import {
  getUserNotifications,
  updateUserNotification
} from "../../store/actions/notificationsAction.js";
import privateRoute from "../auth-HOC";
import DashboardLeft from "../../components/dashboard/dashboard-left/DashboardLeft.js";
import DashboardTop from "../../components/dashboard/dashboard-top/DashboardTop.js";
import ChatWidget from "../../components/chat-widget/ChatWidget.js";
import Analytics from "./analytics/Analytics.js";
import AdGenerator from "./ad-generator/AdGenerator.js";
import Offers from "./offers/Offers.js";
import Settings from "./settings/Settings.js";
import DashboardTour from "../../components/tours/DashboardTour.js";
import SettingsTour from "../../components/tours/SettingsTour.js";
import OfferTour from "../../components/tours/OfferTour.js";
import AdGeneratorTour from "../../components/tours/AdGeneratorTour.js";

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
    currentAnalyticId: ""
  };

  componentDidMount() {
    this.props.getUserData();
    this.props.getOffers();
    this.props.getAgreements();
    this.props.getUserNotifications();
    this.startGettingNotifications();
  }

  componentWillUnmount() {
    clearInterval(this.notificationsInterval);
  }

  startGettingNotifications = () => {
    this.notificationsInterval = setInterval(() => {
      this.props.getUserNotifications();
    }, 15000);
  };

  handleOfferSelect = e => {
    this.props.getAnalytics(e.target.value);
    this.setState({
      currentAnalyticId: e.target.value
    });
  };

  render() {
    const { currentAnalyticId } = this.state;
    const {
      currentUser,
      agreements,
      userNotifications,
      auth,
      updateUserNotification
    } = this.props;
    return (
      <DashboardContainer>
        <DashboardLeft />
        <div className="main-content">
          <DashboardTop
            {...this.props}
            auth={auth}
            handleOfferSelect={this.handleOfferSelect}
            agreements={agreements}
            userNotifications={userNotifications}
            updateUserNotification={updateUserNotification}
          />
          <div className="dashboard-view">
            <Route
              exact
              path="/dashboard"
              render={props => (
                <Analytics {...props} currentAnalyticId={currentAnalyticId} />
              )}
            />
            <Route
              path="/dashboard/offers"
              render={props => <Offers {...props} currentUser={currentUser} />}
            />
            <Route
              path="/dashboard/settings"
              render={props => (
                <Settings {...props} currentUser={currentUser} />
              )}
            />
            <Route path="/dashboard/create-ad" component={AdGenerator} />
            <ChatWidget />
            {currentUser.show_tour &&
              (this.props.location.pathname === "/dashboard" ? (
                <DashboardTour history={this.props.history} />
              ) : this.props.location.pathname === "/dashboard/offers" ? (
                <OfferTour history={this.props.history} />
              ) : this.props.location.pathname === "/dashboard/settings" && (
                <SettingsTour history={this.props.history} />
              )
            )}
            {(this.props.location.pathname === "/dashboard/create-ad" && 
              currentUser.show_ad_tour &&
              this.props.offers.length) && 
                <AdGeneratorTour />
            }
          </div>
        </div>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = state => ({
  userNotifications: state.notificationsReducer.userNotifications,
  currentUser: state.authReducer.currentUser,
  analytics: state.analyticsReducer.analytics,
  offers: state.offersReducer.offers,
  agreements: state.agreementsReducer.agreements
});

export default connect(
  mapStateToProps,
  {
    getAnalytics,
    getOffers,
    getUserData,
    getAgreements,
    getUserNotifications,
    updateUserNotification
  }
)(privateRoute(Dashboard));
