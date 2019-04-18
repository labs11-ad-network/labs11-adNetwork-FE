import React from "react";
import { Link } from "react-router-dom";

import { Nav, HomeButton, ButtonContainer } from "../dashboardStyles.js";
import NavButton from "./NavButton.js";

const DashboardNav = props => (
  <>
    <Nav>
      {/* ------------------------------ Home Button ------------------------------ */}
      <HomeButton>
        <Link to="/">
          <i className="fas fa-home" />
        </Link>
      </HomeButton>
      <ButtonContainer>
        {/* ------------------------------ Dashboard Button ------------------------------ */}
        <div data-btn="dashboard-button">
          <NavButton
            iconClass="fas fa-chart-line"
            pathExtension="/dashboard"
            tooltip="Dashboard"
          />
        </div>
        {/* ------------------------------ Offers Button ------------------------------ */}
        <div data-btn="offers-button">
          <NavButton
            iconClass="fas fa-list"
            pathExtension="/dashboard/offers"
            tooltip="Offers"
          />
        </div>
        {/* ------------------------------ Settings Button ------------------------------ */}
        <div data-btn="settings-button">
          <NavButton
            iconClass="fas fa-cog"
            pathExtension="/dashboard/settings"
            tooltip="Settings"
          />
        </div>
      </ButtonContainer>
    </Nav>
  </>
);

export default DashboardNav;
