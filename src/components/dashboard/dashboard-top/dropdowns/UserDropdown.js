import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

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
            <Button
              buttonRef={node => {
                this.anchorEl = node;
              }}
              aria-owns={userMenuOpen ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              style={{textTransform: "none",}}
            >
              <img src={currentUser.image_url} alt="" />
              <h2>{currentUser.name}</h2>
            </Button>
            <Popper id={1} open={userMenuOpen} anchorEl={this.anchorEl} transition position="left">
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
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
                </Fade>
              )}
            </Popper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(UserDropdown);
