import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getUserData } from '../../../store/actions/authAction.js';
import ProfileCard from '../../../components/settings/profile-card/ProfileCard.js';
import BillingCard from '../../../components/settings/billing-card/BillingCard.js';
import TabContainer from '../../../components/settings/tab-container/TabContainer.js';

const PageContainer = styled.div`
  display: flex;
  margin: 10px;
`

class Settings extends Component {
  componentDidMount(){
    this.props.getUserData();
  }

  render() {
    return (
      <PageContainer>
        <div>
          <ProfileCard currentUser={this.props.currentUser}/>
          <BillingCard currentUser={this.props.currentUser}/>
        </div>
        <TabContainer />
      </PageContainer>
    )
  }
}

export default connect(
  null,
  {
    getUserData
  }
)(Settings)
