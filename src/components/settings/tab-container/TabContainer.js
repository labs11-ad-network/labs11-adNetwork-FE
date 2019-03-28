import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import UserSettingsForm from "./user-settings/UserSettingsForm.js";
import { MainTabContainer } from "../settingsStyles.js";
import Timeline from "../timeline/Timeline";

class TabContainer extends React.Component {
  state = {
    tabValue: 0
  };

  handleChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  render() {
    return (
      <MainTabContainer>
        <Tabs
          value={this.state.tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="User Settings" />
          <Tab label="Payments" />
        </Tabs>

        {this.state.tabValue === 0 && (
          <div>
            <UserSettingsForm />
          </div>
        )}

        {this.state.tabValue === 1 && (
          <div>
            <Timeline />
          </div>
        )}
      </MainTabContainer>
    );
  }
}

export default TabContainer;
