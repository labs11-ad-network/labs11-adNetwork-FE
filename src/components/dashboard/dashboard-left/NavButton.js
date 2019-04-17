import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

import { NavButtonContainer } from "../dashboardStyles.js";
function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.95em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${color} transparent`
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.95em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${color} transparent transparent transparent`
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.95em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${color} transparent transparent`
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.95em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${color}`
      }
    }
  };
}

const styles = theme => ({
  arrowPopper: arrowGenerator("#097ac6"),

  lightTooltip: {
    backgroundColor: "#097ac6",
    color: "#fff",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    marginLeft: 8
  },
  arrow: {
    position: "absolute",
    fontSize: 6,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid"
    }
  }
});

class NavButton extends React.Component {
  state = {
    arrowRef: null
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node
    });
  };

  render() {
    const { classes, tooltip, pathExtension, iconClass } = this.props;
    return (
      <Tooltip
        title={
          <>
            {tooltip}
            <span className={classes.arrow} ref={this.handleArrowRef} />
          </>
        }
        classes={{ popper: classes.arrowPopper, tooltip: classes.lightTooltip }}
        PopperProps={{
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(this.state.arrowRef),
                element: this.state.arrowRef
              }
            }
          }
        }}
        placement="right"
      >
        <NavButtonContainer>
          <NavLink exact to={pathExtension}>
            <i className={iconClass} />
          </NavLink>
        </NavButtonContainer>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(NavButton);
