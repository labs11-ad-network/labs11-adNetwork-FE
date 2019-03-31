import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/lab/Slider";

const styles = {
  root: {
    width: 300
  },
  slider: {
    padding: "22px 0px"
  }
};
class SimpleSlider extends React.Component {
  render() {
    const { classes, handleSliderChange, value, name } = this.props;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={-300}
          max={300}
          aria-labelledby="label"
          name={name}
          onChange={handleSliderChange}
        />
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSlider);
