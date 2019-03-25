import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {
    MainTabContainer
} from '../settingsStyles.js';

class TabContainer extends React.Component{
  state = {
    tabValue: 0,
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

      {this.state.tabValue === 0 && 
      <div> 
        <h1>This is user Settings</h1>
      </div>}

      {this.state.tabValue === 1 && 
      <div> 
        <h1>This is user Payments</h1>
      </div>}

    </MainTabContainer>
    )
  }
}

export default TabContainer