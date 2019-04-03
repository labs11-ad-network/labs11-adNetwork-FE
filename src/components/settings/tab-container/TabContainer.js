import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import UserSettingsForm from "./user-settings/UserSettingsForm.js";
import { MainTabContainer } from "../settingsStyles.js";
import Timeline from "./payments/Timeline.js";

class TabContainer extends React.Component {
  state = {
    tabValue: 0
  };

  handleChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  render() {
    const { tabValue } = this.state;
    const { currentUser, payments, payouts } = this.props;
    return (
      <MainTabContainer>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="User Settings" />
          <Tab
            label={
              currentUser.acct_type === "advertiser" ? "Payments" : "Payouts"
            }
          />
        </Tabs>

        {tabValue === 0 && (
          <div>
            <UserSettingsForm />
          </div>
        )}

        {tabValue === 1 && (
          <div>
            <Timeline
              payouts={payouts}
              payments={payments}
              currentUser={currentUser}
            />
          </div>
        )}
      </MainTabContainer>
    );
  }
}

export default TabContainer;
