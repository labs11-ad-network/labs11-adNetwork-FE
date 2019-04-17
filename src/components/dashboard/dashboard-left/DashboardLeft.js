import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Nav, HomeButton, ButtonContainer } from "../dashboardStyles.js";
import NavButton from "./NavButton.js";

export class DashboardNav extends Component {
  state = {
    navOpen: false
  };

  render() {
    return (
      <>
        <Nav>
          <HomeButton>
            <Link to="/">
              <i className="fas fa-home" />
            </Link>
          </HomeButton>
          <ButtonContainer>
            <div data-btn="dashboard-button">
              <NavButton
                iconClass="fas fa-chart-line"
                pathExtension="/dashboard"
                tooltip="Dashboard"
              />
            </div>
            <div data-btn="offers-button">
              <NavButton
                iconClass="fas fa-list"
                pathExtension="/dashboard/offers"
                tooltip="Offers"
              />
            </div>
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
  }
}

export default DashboardNav;
