import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { DashboardContainer } from "./containerStyles.js";
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

class Dashboard extends Component {
  state = {
    currentAnalyticId: ""
  };

  componentDidMount() {
    this.props.getUserData();
    this.props.getOffers();
    this.props.getAgreements();
    this.startGettingNotifications();
  }

  componentWillUnmount() {
    clearInterval(this.notificationsInterval);
  }

  startGettingNotifications = () => {
    this.props.getUserNotifications();
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
        {/* ------------------------------ Left Navigation ------------------------------ */}
        <DashboardLeft />
        <div className="main-content">
          {/* ------------------------------ Top Navigation ------------------------------ */}
          <DashboardTop
            {...this.props}
            auth={auth}
            handleOfferSelect={this.handleOfferSelect}
            agreements={agreements}
            userNotifications={userNotifications}
            updateUserNotification={updateUserNotification}
          />
          <div className="dashboard-view">
            {/* ------------------------------ Analytics Route ------------------------------ */}
            <Route
              exact
              path="/dashboard"
              render={props => (
                <Analytics {...props} currentAnalyticId={currentAnalyticId} />
              )}
            />
            {/* ------------------------------ Offers Route ------------------------------ */}
            <Route path="/dashboard/offers" component={Offers}/>
            {/* ------------------------------ Settings Route ------------------------------ */}
            <Route path="/dashboard/settings" component={Settings}/>
            {/* ------------------------------ Ad Generator route ------------------------------ */}
            <Route path="/dashboard/create-ad" component={AdGenerator} />
            {/* ------------------------------ Live Chat ------------------------------ */}
            <ChatWidget />
            {/* ------------------------------ Conditionally Rendering Tours For Each Page ------------------------------ */}
            {currentUser.show_tour &&
              (this.props.location.pathname === "/dashboard" ? (
                <DashboardTour history={this.props.history} />
              ) : this.props.location.pathname === "/dashboard/offers" ? (
                <OfferTour history={this.props.history} />
              ) : this.props.location.pathname === "/dashboard/settings" && (
                <SettingsTour history={this.props.history} />
              )
            )}
            {
              (this.props.location.pathname === "/dashboard/create-ad" && 
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
