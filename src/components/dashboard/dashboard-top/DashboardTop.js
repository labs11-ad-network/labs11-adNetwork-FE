import React from "react";
import { Link, NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";

import LinearLoader from "../../loader/LinearLoader";
import CircularLoader from "../../loader/CircularLoader";

import {
  NavContainer,
  LeftSection,
  RightSection,
  Header,
  MobileHamburger,
  MobileCreate,
  MobileNav,
  MobileNavButton
} from "../dashboardStyles.js";

const styles = theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

class DashboardTop extends React.Component {
  state = {
    movileNavOpen: false,
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  toggleNav = () => {
    this.setState({ movileNavOpen: !this.state.movileNavOpen });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <>
        <NavContainer>
          <MobileNav status={this.state.movileNavOpen}>
            <button onClick={() => this.toggleNav()}>
              <i className="fas fa-times" />
            </button>
            <MobileNavButton onClick={() => this.toggleNav()}>
              <NavLink exact to="/dashboard">
                <i className="fas fa-chart-line" />
                Dashboard
              </NavLink>
            </MobileNavButton>
            <MobileNavButton onClick={() => this.toggleNav()}>
              <NavLink to="/dashboard/offers">
                <i className="fas fa-list" />
                Offers
              </NavLink>
            </MobileNavButton>
            <MobileNavButton onClick={() => this.toggleNav()}>
              <NavLink to="/dashboard/settings">
                <i className="fas fa-cog" />
                Settings
              </NavLink>
            </MobileNavButton>
          </MobileNav>
          <LeftSection>
            {/* --------------------- Mobile navigation ------------------ */}
            <div>
              <MobileHamburger>
                <a
                  href="hamburger"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ movileNavOpen: !this.state.movileNavOpen });
                  }}
                >
                  <i className="fas fa-bars" />
                </a>
              </MobileHamburger>
              {!this.props.location.pathname.includes("dashboard/") && (
                <MobileCreate>
                  <Link to="/dashboard/create-ad">
                    <i className="fas fa-pencil-alt" />
                  </Link>
                </MobileCreate>
              )}
            </div>
            {/* ---------------------------------------------------------- */}
            <Header>
              {this.props.location.pathname.includes("offers") ? (
                <>
                  <i className="fas fa-list" /> Offers
                </>
              ) : this.props.location.pathname.includes("settings") ? (
                <>
                  <i className="fas fa-cog" /> Settings
                </>
              ) : this.props.location.pathname.includes("create") ? (
                <>
                  <i className="fas fa-pencil-alt" /> Create Ad
                </>
              ) : (
                <>
                  <i className="fas fa-chart-line" /> Dashboard
                </>
              )}
            </Header>
            {!this.props.location.pathname.includes("dashboard/") && (
              <select
                name="selected_offer"
                value={this.props.currentOffer}
                onChange={this.props.handleOfferSelect}
                required
              >
                {this.props.currentUser.acct_type === "advertiser" ? (
                  <>
                    <option value="">All Offers</option>
                    {this.props.userOffers.length &&
                      this.props.userOffers.map(offer => {
                        return (
                          <option key={offer.id} value={offer.id}>
                            {offer.name}
                          </option>
                        );
                      })}
                  </>
                ) : (
                  <>
                    <option value="">All Agreements</option>
                    {this.props.agreements.length &&
                      this.props.agreements.map(a => {
                        return (
                          <option key={a.id} value={a.id}>
                            {a.name}
                          </option>
                        );
                      })}
                  </>
                )}
              </select>
            )}
            {this.props.currentUser.acct_type === "advertiser" && (
              <Link to="/dashboard/create-ad">Create Advertisement</Link>
            )}
          </LeftSection>
          <RightSection>
            {this.props.currentUser && (
              <>
                <Badge
                  badgeContent={this.props.notificationsList.length}
                  color="primary"
                  buttonRef={node => {
                    this.anchorEl = node;
                  }}
                  aria-owns={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleToggle}
                >
                  <i className="fas fa-bell" />
                </Badge>

                <i
                  className="fas fa-sign-out-alt"
                  onClick={() => {
                    localStorage.clear();
                    this.props.history.push("/");
                  }}
                />
                <div>
                  <img src={this.props.currentUser.image_url} alt="" />
                  <h2>{this.props.currentUser.name}</h2>
                </div>
              </>
            )}
          </RightSection>
        </NavContainer>
        <LinearLoader />
        <CircularLoader />
      </>
    );
  }
}

export default withStyles(styles)(DashboardTop);
