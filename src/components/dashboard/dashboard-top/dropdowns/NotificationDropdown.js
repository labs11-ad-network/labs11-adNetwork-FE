import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./notificationDropDownStyles";
import { withStyles } from "@material-ui/core/styles";

import moment from "moment";

import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
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

const notificationStyles = {
  unread: {},
  read: {
    color: "grey"
  }
};

class NotificationDropdown extends React.Component {
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
    this.props.userNotifications &&
      this.props.userNotifications
        .filter(n => n.unread !== false)
        .map(n => this.props.updateUserNotification({ ...n, unread: false }));
  };

  render() {
    const { classes, userNotifications, location } = this.props;
    const { open } = this.state;

    const unreadBadgeCount =
      userNotifications &&
      userNotifications.filter(n => n.unread === true).length;

    return (
      <Container>
        <div className={classes.root}>
          <div data-btn="notifications_menu-button">
            <Button
              buttonRef={node => {
                this.anchorEl = node;
              }}
              aria-owns={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={this.handleToggle}
              className="button-margin-fix"
            >
              <Badge badgeContent={unreadBadgeCount} color="primary">
                <i className="fas fa-bell" />
              </Badge>
            </Button>
            <Popper
              open={open}
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
                        {userNotifications.length !== 0 ? (
                          userNotifications.map(n => (
                            <MenuItem
                              style={
                                n.unread
                                  ? notificationStyles.unread
                                  : notificationStyles.read
                              }
                              key={n.id}
                              className="notif-list-item"
                            >
                              <span>
                                {`${n.msg_body}
                                `}
                              </span>
                              <span className="notif-time">
                                <i className="far fa-clock" />
                                {`${moment(
                                  n.created_at,
                                  "YYYY-MM-DO, hh:mm:ss Z"
                                ).fromNow()}`}
                              </span>
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem>No notifications yet :(</MenuItem>
                        )}
                        {!location.pathname.includes("dashboard/settings") &&
                          userNotifications.length !== 0 && (
                            <Link
                              className="see-more-link"
                              to="/dashboard/settings"
                              onClick={this.handleClose}
                            >
                              <MenuItem>See all activity...</MenuItem>
                            </Link>
                          )}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(NotificationDropdown);
