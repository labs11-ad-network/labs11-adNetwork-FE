import React from "react";

const NavList = ({ history }) => {
  return (
    <div className="middle-anchors desktop-anchor">
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
      <a href="#screenshots">Screenshots</a>
      <a href="#reviews">Reviews</a>
      <a href="/dashboard" onClick={() => history.push("/dashboard")}>
        Dashboard
      </a>
    </div>
  );
};

export default NavList;
