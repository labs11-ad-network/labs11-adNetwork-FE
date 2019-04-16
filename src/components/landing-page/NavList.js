// import React from "react";

// const NavList = () => {
//   return (
//     <div className="middle-anchors desktop-anchor">
//       <a href="#team">Team</a>
//       <a href="#contact">Contact</a>
//       <a href="#screenshots">Screenshots</a>
//       <a href="#reviews">Reviews</a>
//       <a href="#dashboard" hidden={!localStorage.id_token}>
//         Dashboard
//       </a>
//     </div>
//   );
// };

// export default NavList;

import React, { Component } from "react";

class NavList extends Component {
  state = {
    isDashboard: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isDashboard !== this.state.isDashboard) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="middle-anchors desktop-anchor">
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
        <a href="#screenshots">Screenshots</a>
        <a href="#reviews">Reviews</a>
        <a
          href="#dashboard"
          onClick={() => this.setState({ isDashboard: true })}
          hidden={!localStorage.id_token}
        >
          Dashboard
        </a>
      </div>
    );
  }
}

export default NavList;
