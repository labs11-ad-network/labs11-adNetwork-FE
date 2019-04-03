import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";

function LinearIndeterminate(props) {
  const { classes } = props;
  return <LinearProgress />;
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default LinearIndeterminate;
