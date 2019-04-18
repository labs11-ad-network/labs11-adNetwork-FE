import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import UserSettingsForm from "./user-settings/UserSettingsForm.js";
import { MainTabContainer } from "../settingsStyles.js";
import Timeline from "./payments/Timeline.js";

const TabContainer = ({
  currentUser,
  payments,
  payouts,
  handleTabChange,
  tabValue,
  history
}) => (
  <MainTabContainer data-btn='edit_profile-tab'>
  
    {/* ------------------------------ Tab Navigation ------------------------------ */}
    <Tabs
      value={tabValue}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleTabChange}
    >
      <Tab label="User Settings" className="tab"/>
      <Tab
        label={currentUser.acct_type === "advertiser" ? "Payments" : "Payouts"}
        className="tab"
        data-btn='view_payments-tab'
      />
    </Tabs>
    
    {/* ------------------------------ User Settings Tab ------------------------------ */}
    {tabValue === 0 && (
      <div>
        <UserSettingsForm 
          history={history}
        />
      </div>
    )}

    {/* ------------------------------ Payouts Tab ------------------------------ */}
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

export default TabContainer;
