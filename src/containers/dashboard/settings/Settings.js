import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getUserData } from '../../../store/actions/authAction.js';
import { getPayouts, getPayments } from '../../../store/actions/stripeAction.js';
import ProfileCard from '../../../components/settings/profile-card/ProfileCard.js';
import BillingCard from '../../../components/settings/billing-card/BillingCard.js';
import SnippetCard from '../../../components/settings/snippet-card/SnippetCard.js';
import TabContainer from '../../../components/settings/tab-container/TabContainer.js';

const PageContainer = styled.div`
  display: flex;
  margin: 10px;
  .billing-container{
    display: flex;
    justify-content: space-between
    margin: 15px;
  }
`

class Settings extends Component {
  componentDidMount(){
    this.props.getUserData();
    this.props.getPayouts();
    this.props.getPayments();
  }

  render() {
    return (
      <PageContainer>
        <div>
          <ProfileCard currentUser={this.props.currentUser}/>
          <div className="billing-container">
            <BillingCard currentUser={this.props.currentUser}/>
            <BillingCard currentUser={this.props.currentUser} title="Total Made"/>
          </div>
          <SnippetCard currentUser={this.props.currentUser}/>
        </div>
        <TabContainer 
          payouts={this.props.payouts} 
          payments={this.props.payments}
          currentUser={this.props.currentUser}
        />
      </PageContainer>
    )
  }
}

const mapStateToProps = state => {
  return{
    payouts: state.stripeReducer.payouts,
    payments: state.stripeReducer.payments
  }
}

export default connect(
  mapStateToProps,
  {
    getUserData,
    getPayouts,
    getPayments
  }
)(Settings)
