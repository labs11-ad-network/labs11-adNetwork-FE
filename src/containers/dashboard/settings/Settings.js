import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getUserData } from "../../../store/actions/authAction.js";
import {
  getPayouts,
  getPayments
} from "../../../store/actions/stripeAction.js";
import ProfileCard from "../../../components/settings/profile-card/ProfileCard.js";
import BillingCard from "../../../components/settings/billing-card/BillingCard.js";
import SnippetCard from "../../../components/settings/snippet-card/SnippetCard.js";
import TabContainer from "../../../components/settings/tab-container/TabContainer.js";

const PageContainer = styled.div`
  display: flex;
  margin: 10px;
  .billing-container {
    display: flex;
    justify-content: space-between;
    margin: 15px;
  }
  @media (max-width: 1170px) {
    flex-direction: column;
    margin: unset;
    width: 95%;
    margin: 0 auto;
    .billing-container {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

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
    const { currentUser, payouts, payments } = this.props;

    return (
      <PageContainer>
        <div>
          <ProfileCard currentUser={currentUser} />
          <div className="billing-container">
            <BillingCard currentUser={currentUser} />
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
          </div>
          <SnippetCard currentUser={currentUser} />
        </div>

        <TabContainer
          payouts={payouts}
          payments={payments}
          currentUser={currentUser}
          handleTabChange={this.handleTabChange}
          tabValue={tabValue}
        />
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
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
