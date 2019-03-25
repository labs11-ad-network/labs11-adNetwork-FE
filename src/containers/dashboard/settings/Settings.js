import React, { Component } from 'react'
import styled from 'styled-components';

import ProfileCard from '../../../components/settings/profile-card/ProfileCard.js';
import BillingCard from '../../../components/settings/billing-card/BillingCard.js';
import TabContainer from '../../../components/settings/tab-container/TabContainer.js';

const PageContainer = styled.div`
  display: flex;
  margin: 10px;
`

class Settings extends Component {
  render() {
    return (
      <PageContainer>
        <div>
          <ProfileCard currentUser={this.props.currentUser}/>
          <BillingCard/>
        </div>
        <TabContainer />
      </PageContainer>
    )
  }
}

export default Settings
