import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import styled from "styled-components";

const MobileNav = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  a {
    text-decoration: none;
    font-size: 15px;
    margin-bottom: 25px;
  }
`;

const NavDrawer = ({ history, toggleDrawer, left, visible }) => {
  return (
    <SwipeableDrawer open={left} onClose={toggleDrawer} onOpen={toggleDrawer}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        style={{ zIndex: 999999999, width: "250px" }}
      >
        <MobileNav>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
          <a href="#screenshots">Screenshots</a>
          <a href="#reviews">Reviews</a>
          <a href="/dashboard" onClick={() => history.push("/dashboard")}>
            Dashboard
          </a>
        </MobileNav>
      </div>
    </SwipeableDrawer>
  );
};

export default NavDrawer;
