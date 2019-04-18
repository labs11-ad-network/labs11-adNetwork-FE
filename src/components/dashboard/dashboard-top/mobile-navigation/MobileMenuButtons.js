import React from "react";

import { Link } from "react-router-dom";
import { ElasticReverse } from "react-burgers";

import { MobileHamburger, MobileCreate } from "../../dashboardStyles.js";

const MobileMenuButtons = ({ location, toggleNav, movileNavOpen }) => (
  <div>
    <MobileHamburger>
      {/* ------------------------------ Hamburger Button ------------------------------ */}
      <ElasticReverse
        className="td"
        color="#fff"
        lineHeight={4}
        width={28}
        onClick={e => {
          e.preventDefault();
          toggleNav();
        }}
        active={movileNavOpen}
      />
    </MobileHamburger>

    {/* ------------------------------ Create Ad Button ------------------------------ */}
    {!location.pathname.includes("dashboard/") && (
      <MobileCreate>
        <Link to="/dashboard/create-ad">
          <i className="fas fa-pencil-alt" />
        </Link>
      </MobileCreate>
    )}
  </div>
);

export default MobileMenuButtons;
