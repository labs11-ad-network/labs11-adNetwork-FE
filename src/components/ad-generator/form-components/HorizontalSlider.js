import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";

const styles = {
  slider: {
    padding: "22px 0px"
  }
};

class SimpleSlider extends React.Component {
  state = {
    value: 50
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, sliderName } = this.props;
    const { value } = this.state;

    return (
      <>
        <Typography id="label">{sliderName || "No Name"}</Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          onChange={this.handleChange}
        />
      </>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSlider);
