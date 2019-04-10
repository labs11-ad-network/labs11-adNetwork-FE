import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const styles = theme => ({
  root: {
    display: "flex"
  },
  menu: {
    zIndex: 999999999999999999
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

class UserDropdown extends React.Component {
  render() {
    const {
      classes,
      userMenuOpen,
      currentUser,
      handleToggle,
      handleClose,
      auth
    } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={userMenuOpen ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <img src={currentUser.image_url} alt="" />
            <h2>{currentUser.name}</h2>
          </button>
          <Popper
            open={userMenuOpen}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            className={classes.menu}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem
                        onClick={e => {
                          handleClose(e);
                        }}
                        component={Link}
                        to="/dashboard/settings"
                      >
                        Profile
                      </MenuItem>
                      <MenuItem
                        onClick={e => {
                          handleClose(e);
                          auth.logout();
                        }}
                        component={Link}
                        to="/"
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(UserDropdown);
