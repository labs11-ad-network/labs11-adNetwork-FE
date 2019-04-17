import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
    movileNavOpen: false
  };

  toggleNav = () => {
    this.setState({ movileNavOpen: !this.state.movileNavOpen });
  };

  render() {
    const {
      currentUser,
      userNotifications,
      updateUserNotification,
      handleOfferSelect,
      currentOffer,
      offers,
      agreements,
      isLoadingAds,
      isLoadingAgreements,
      isLoadingOffers,
      isLoadingStripe,
      auth
    } = this.props;

    const { movileNavOpen } = this.state;

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
            {/* --------------------- Analytics selector ------------------ */}
            <AnalyticsDropdown
              currentUser={currentUser}
              handleOfferSelect={handleOfferSelect}
              location={this.props.location}
              currentOffer={currentOffer}
              offers={offers}
              agreements={agreements}
            />
            {/* --------------------- Create Advertisement Button ------------------ */}
            {currentUser.acct_type === "advertiser" && (
              <Link data-btn="create_ad-button" to="/dashboard/create-ad">
                Create Advertisement
              </Link>
            )}
          </LeftSection>
          <RightSection>
            {currentUser && (
              <>
                {/* --------------------- Notifications Menu ------------------ */}
                <NotificationDropdown
                  userNotifications={userNotifications}
                  updateUserNotification={updateUserNotification}
                  location={this.props.location}
                />
                {/* --------------------- User menu ------------------ */}
                <UserDropdown auth={auth} currentUser={currentUser} />
              </>
            )}
          </RightSection>
        </NavContainer>

        {(isLoadingAds ||
          isLoadingAgreements ||
          isLoadingOffers ||
          isLoadingStripe) && <LinearLoader />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingAds: state.adReducer.isLoading,
  isLoadingAgreements: state.agreementsReducer.isLoading,
  isLoadingOffers: state.offersReducer.isLoading,
  isLoadingStripe: state.stripeReducer.isLoading
});

export default connect(
  mapStateToProps,
  null
)(DashboardTop);
