import React from "react";

const NavList = () => {
  return (
    <div className="middle-anchors desktop-anchor">
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
      <a href="#screenshots">Screenshots</a>
      <a href="#reviews">Reviews</a>
      <a href="/dashboard" hidden={!localStorage.id_token}>
        Dashboard
      </a>
    </div>
  );
};

export default NavList;
