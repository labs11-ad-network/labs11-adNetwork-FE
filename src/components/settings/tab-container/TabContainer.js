import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {
    MainTabContainer
} from '../settingsStyles.js';

class TabContainer extends React.Component{
  state = {
      tabValue: 2,
  };
    
  handleChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  render(){
    return (
    <MainTabContainer>
        <Tabs
          value={this.state.tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="User Settings"/>
          <Tab label="Payments"/>
        </Tabs>
    </MainTabContainer>
    )

  }
}

export default TabContainer