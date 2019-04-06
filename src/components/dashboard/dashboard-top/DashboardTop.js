import React from "react";
import { Link } from "react-router-dom";

import LinearLoader from "../../loader/LinearLoader";
import MobileMenu from "./mobile-navigation/MobileMenu.js";
import MobileMenuButtons from "./mobile-navigation/MobileMenuButtons.js"; 
import AnalyticsDropdown from "./dropdowns/AnalyticsDropdown.js";
import NotificationDropdown from "./dropdowns/NotificationDropdown.js";
import UserDropdown from "./dropdowns/UserDropdown.js";

import {
  NavContainer,
  LeftSection,
  RightSection,
  Header
} from "../dashboardStyles.js";

class DashboardTop extends React.Component {
  state = {
    movileNavOpen: false,
    userMenuOpen: false,
    notificationsMenuOpen: false
  };

  toggleNav = () => {
    this.setState({ movileNavOpen: !this.state.movileNavOpen });
  };

  handleUserMenuToggle = () => {
    this.setState(state => ({ userMenuOpen: !state.userMenuOpen }));
  };

  handleNotificationsToggle = () => {
    this.setState(state => ({
      notificationsMenuOpen: !state.notificationsMenuOpen
    }));
  };

  handleUserMenuClose = e => {
    e.stopPropagation();

    this.setState({ userMenuOpen: false });
  };

  handleNotificationsClose = e => {
    e.stopPropagation();
    const { userNotifications, updateUserNotification } = this.props;

    this.setState({ notificationsMenuOpen: false });

    userNotifications &&
      userNotifications.map(n =>
        updateUserNotification({ ...n, unread: false })
      );
  };

  render() {
    const { 
      currentUser, 
      userNotifications, 
      handleOfferSelect, 
      currentOffer, 
      userOffers,
      agreements
    } = this.props;

    const { userMenuOpen, notificationsMenuOpen, movileNavOpen } = this.state;

    return (
      <>
        <NavContainer>
          {/* --------------------- Mobile Hamburger Menu ------------------ */}
          <MobileMenu 
            movileNavOpen={movileNavOpen} 
            toggleNav={this.toggleNav}
          />
          <LeftSection>
            {/* --------------------- Mobile Hamburger and Create Ad buttons ------------------ */}
            <MobileMenuButtons 
              movileNavOpen={movileNavOpen} 
              location={this.props.location}
              toggleNav={this.toggleNav}
              currentUser={currentUser}
            />
            {/* --------------------- Conditional Header Rendering ------------------ */}
            <Header>
              {this.props.location.pathname.includes("offers") ? (
                <>
                  <i className="fas fa-list" /> Offers
                </>
              ) : this.props.location.pathname.includes("settings") ? (
                <>
                  <i className="fas fa-cog" /> Settings
                </>
              ) : this.props.location.pathname.includes("create") ? (
                <>
                  <i className="fas fa-pencil-alt" /> Create Ad
                </>
              ) : (
                <>
                  <i className="fas fa-chart-line" /> Dashboard
                </>
              )}
            </Header>
            {/* --------------------- Analyticis selector ------------------ */}
            <AnalyticsDropdown
              currentUser={currentUser}
              handleOfferSelect={handleOfferSelect}
              location={this.props.location}
              currentOffer={currentOffer}
              userOffers={userOffers}
              agreements={agreements}
            />
            {/* --------------------- Create Advertisement Button ------------------ */}            
            {currentUser.acct_type === "advertiser" && (
              <Link to="/dashboard/create-ad">Create Advertisement</Link>
            )}
          </LeftSection>
          <RightSection>
            {currentUser && (
              <>
                {/* --------------------- Notifications Menu ------------------ */}            
                <NotificationDropdown
                  notificationsMenuOpen={notificationsMenuOpen}
                  userNotifications={userNotifications}
                  handleToggle={this.handleNotificationsToggle}
                  handleClose={this.handleNotificationsClose}
                />
                {/* --------------------- User menu ------------------ */}            
                <UserDropdown
                  userMenuOpen={userMenuOpen}
                  currentUser={currentUser}
                  handleToggle={this.handleUserMenuToggle}
                  handleClose={this.handleUserMenuClose}
                />
              </>
            )}
          </RightSection>
        </NavContainer>
        {
          (
          this.props.isLoadingAds ||
          this.props.isLoadingAgreements ||
          this.props.isLoadingOffers ||
          this.props.isLoadingStripe ||
          this.props.isLoadingAnalytics
          ) && (
            <LinearLoader />
          )
        }
      </>
    );
  }
}

export default DashboardTop;