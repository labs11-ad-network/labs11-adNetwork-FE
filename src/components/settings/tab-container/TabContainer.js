import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import UserSettingsForm from "./user-settings/UserSettingsForm.js";
import { MainTabContainer } from "../settingsStyles.js";
import Timeline from "./payments/Timeline.js";

class TabContainer extends React.Component {
  render() {
    const {
      currentUser,
      payments,
      payouts,
      handleTabChange,
      tabValue,
      history
    } = this.props;

    return (
      <MainTabContainer data-btn='edit_profile-tab'>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTabChange}
        >
          <Tab label="User Settings" />
          <Tab
            label={
              currentUser.acct_type === "advertiser" ? "Payments" : "Payouts"
            }
            data-btn='view_payments-tab'
          />
        </Tabs>

        {tabValue === 0 && (
          <div>
            <UserSettingsForm 
              history={history}
            />
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
