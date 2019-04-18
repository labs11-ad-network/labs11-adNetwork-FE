import React from "react";
import { NavLink } from "react-router-dom";

import { MobileNav, MobileNavButton } from "../../dashboardStyles.js";

const MobileMenu = ({ movileNavOpen, toggleNav }) => (
  <MobileNav status={movileNavOpen}>
    {/* ------------------------------ Dashboard Button ------------------------------ */}
    <MobileNavButton onClick={() => toggleNav()}>
      <NavLink className="dashboard" exact to="/dashboard">
        <i className="fas fa-chart-line" />
        Dashboard
      </NavLink>
    </MobileNavButton>
    {/* ------------------------------ Offers Button ------------------------------ */}
    <MobileNavButton onClick={() => toggleNav()}>
      <NavLink to="/dashboard/offers">
        <i className="fas fa-list" />
        Offers
      </NavLink>
    </MobileNavButton>
    {/* ------------------------------ Settings Button ------------------------------ */}
    <MobileNavButton onClick={() => toggleNav()}>
      <NavLink to="/dashboard/settings">
        <i className="fas fa-cog" />
        Settings
      </NavLink>
    </MobileNavButton>
  </MobileNav>
);

export default MobileMenu;
