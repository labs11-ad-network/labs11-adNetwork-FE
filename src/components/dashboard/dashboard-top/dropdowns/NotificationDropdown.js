import React from "react";
import moment from "moment";

import Badge from "@material-ui/core/Badge";
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
    // width: 200,
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
  render() {
    const {
      classes,
      notificationsMenuOpen,
      handleToggle,
      handleClose,
      userNotifications
    } = this.props;

    const unreadBadgeCount =
      userNotifications &&
      userNotifications.filter(n => n.unread === true).length;

    return (
      <div className={classes.root}>
        <div>
          <button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={notificationsMenuOpen ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <Badge badgeContent={unreadBadgeCount} color="primary">
              <i className="fas fa-bell" />
            </Badge>
          </button>
          <Popper
            open={notificationsMenuOpen}
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
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList>
                      {userNotifications &&
                        userNotifications.map(n => (
                          <MenuItem
                            style={
                              n.unread
                                ? notificationStyles.unread
                                : notificationStyles.read
                            }
                            key={n.id}
                          >
                            <p>
                              {userNotifications
                                ? `${n.msg_body} ...${moment(
                                    n.created_at,
                                    "YYYY-MM-DO, hh:mm:ss Z"
                                  ).fromNow()}`
                                : "No notifications yet :("}
                            </p>
                          </MenuItem>
                        ))}
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

export default withStyles(styles)(NotificationDropdown);
