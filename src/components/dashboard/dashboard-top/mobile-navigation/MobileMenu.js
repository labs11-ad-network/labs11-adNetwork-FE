import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  MobileNav,
  MobileNavButton
} from "../../dashboardStyles.js";

const MobileMenu = props => {
  return (
    <MobileNav status={props.movileNavOpen}>
      {/* <button onClick={() => props.toggleNav()}>
          <i className="fas fa-times" />
        </button> */}
      <MobileNavButton onClick={() => props.toggleNav()}>
        <NavLink className="dashboard" exact to="/dashboard">
          <i className="fas fa-chart-line" />
          Dashboard
          </NavLink>
      </MobileNavButton>
      <MobileNavButton onClick={() => props.toggleNav()}>
        <NavLink to="/dashboard/offers">
          <i className="fas fa-list" />
          Offers
          </NavLink>
      </MobileNavButton>
      <MobileNavButton onClick={() => props.toggleNav()}>
        <NavLink to="/dashboard/settings">
          <i className="fas fa-cog" />
          Settings
          </NavLink>
      </MobileNavButton>
    </MobileNav>
  )
}

export default MobileMenu;