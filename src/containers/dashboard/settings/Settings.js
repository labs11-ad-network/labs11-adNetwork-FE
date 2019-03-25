import React, { Component } from 'react'
import styled from 'styled-components';

import ProfileCard from '../../../components/settings/profile-card/ProfileCard.js';
import TabContainer from '../../../components/settings/tab-container/TabContainer.js';

const PageContainer = styled.div`
  display: flex;
  margin: 10px;
`

class Settings extends Component {
  render() {
    return (
      <PageContainer>
        <ProfileCard currentUser={this.props.currentUser}/>
        <TabContainer />
      </PageContainer>
    )
  }
}

export default Settings
