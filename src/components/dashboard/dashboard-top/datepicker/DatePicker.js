import "date-fns";
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
import axios from "axios";
import { connect } from "react-redux";

import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "material-ui-pickers";

const styles = {
  grid: {
    width: "60%"
  },
  datepicker: {
    width: "100%",
    marginLeft: 100
  }
};

class MaterialUIPickers extends React.Component {
  render() {
    const {
      classes,
      startedAt,
      endedAt,
      handleStartedDateChange,
      handleEndedDateChange,
      getAnalytics
    } = this.props;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          <DatePicker
            className={classes.datepicker}
            margin="normal"
            label="Start Date"
            value={startedAt}
            onChange={handleStartedDateChange}
          />
        </Grid>
        <Grid container className={classes.grid} justify="space-around">
          <DatePicker
            margin="normal"
            label="End Date"
            value={endedAt}
            onChange={handleEndedDateChange}
          />
        </Grid>
        <button onClick={getAnalytics}>CLICK</button>
      </MuiPickersUtilsProvider>
    );
  }
}

MaterialUIPickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MaterialUIPickers);
