import React, { Component } from "react";
import { connect } from "react-redux";

import { SettingsContainer, BillingContainer } from "./containerStyles.js";
import { getUserData } from "../../../store/actions/authAction.js";
import { getPayouts, getPayments } from "../../../store/actions/stripeAction.js";
import ProfileCard from "../../../components/settings/profile-card/ProfileCard.js";
import BillingCard from "../../../components/settings/billing-card/BillingCard.js";
import SnippetCard from "../../../components/settings/snippet-card/SnippetCard.js";
import TabContainer from "../../../components/settings/tab-container/TabContainer.js";

class Settings extends Component {
  state = {
    tabValue: 0
  };

  componentDidMount() {
    this.props.getUserData();
    this.props.getPayouts();
    this.props.getPayments();
  }

  handleTabChange = (e, tabValue) => {
    this.setState({ tabValue });
  };

  render() {
    const { tabValue } = this.state;
    const { currentUser, payouts, payments, history } = this.props;

    return (
      <SettingsContainer>
        {/* ------------------------------ Left Section ------------------------------ */}        
        <div>
          {/* ------------------------------ Profile Card ------------------------------ */}
          <ProfileCard currentUser={currentUser} />
          <BillingContainer>
            {/* ------------------------------ Amount Due/Made ------------------------------ */}
            <BillingCard currentUser={currentUser} />
            {/* ------------------------------ Total Spent/Made ------------------------------ */}
            <BillingCard
              currentUser={currentUser}
              title={
                currentUser.acct_type === "advertiser"
                  ? "Total Spent"
                  : "Total Made"
              }
              balance={currentUser.stripe_balance}
              button={
                currentUser.acct_type === "advertiser"
                  ? "View Payments"
                  : "View Payouts"
              }
              clicked={e => this.handleTabChange(e, 1)}
            />
          </BillingContainer>
          {/* ------------------------------ Desktop Snippet ------------------------------ */}          
          <div data-btn="snippet" className="desktop-snippet">
            <SnippetCard currentUser={currentUser}/>
          </div>
        </div>
        {/* ------------------------------ Tab Container (right section) ------------------------------ */} 
        <TabContainer
          payouts={payouts}
          payments={payments}
          currentUser={currentUser}
          handleTabChange={this.handleTabChange}
          tabValue={tabValue}
          history={history}
        />
        {/* ------------------------------ Mobile Snippet ------------------------------ */} 
        <div data-btn="snippet" className="mobile-snippet">
          <SnippetCard currentUser={currentUser}/>
        </div>
      </SettingsContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser,
    payouts: state.stripeReducer.payouts,
    payments: state.stripeReducer.payments
  };
};

export default connect(
  mapStateToProps,
  {
    getUserData,
    getPayouts,
    getPayments
  }
)(Settings);
