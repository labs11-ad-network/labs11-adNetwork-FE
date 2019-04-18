import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

const styles = theme => ({
  root: {
    display: "flex"
  },
  menu: {
    zIndex: 9999
  }
});

class UserDropdown extends React.Component {
  state = {
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

  render() {
    const { classes, currentUser, auth } = this.props;
    const { open } = this.state

    return (
      <div className={classes.root}>
        <div data-btn="user_menu-button">
          {/* ------------------------------ Fropdown Toggle ------------------------------ */}
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
            style={{ textTransform: "none", marginLeft: "0" }}
          >
            <img src={currentUser.image_url} alt="" />
            <h2>{currentUser.name}</h2>
          </Button>
          
          {/* ------------------------------ Dropdown ------------------------------ */}
          <Popper
            id={1}
            open={open}
            anchorEl={this.anchorEl}
            transition
            position="left"
            className={classes.menu}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <ClickAwayListener onClickAway={e => this.handleClose(e)}>
                    <MenuList>
                      {/* ------------------------------ Profile Button ------------------------------ */}
                      <MenuItem
                        onClick={this.handleToggle}
                        component={Link}
                        to="/dashboard/settings"
                      >
                        Profile
                      </MenuItem>
                      {/* ------------------------------ Logout Button ------------------------------ */}
                      <MenuItem
                        onClick={e => {
                          this.handleToggle();
                          auth.logout();
                        }}
                        to="/"
                        component={Link}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(UserDropdown);
