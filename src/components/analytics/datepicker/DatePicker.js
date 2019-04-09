import "date-fns";
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import moment from 'moment';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from "material-ui-pickers";

const styles = {
  grid: {
    width: "60%"
  },
};

const CustomInput = props => {
  return(
    <>
      <label htmlFor={props.name}> {props.datePicker.label} </label>
      <input
        onChange={props.datePicker.onChange}
        onClick={props.datePicker.onClick}
        name={props.name}
        value={props.datePicker.value}
      />
    </>
  )
}

class MaterialUIPickers extends React.Component {
  render() {
    const {
      classes,
      startedAt,
      endedAt,
      handleDateChange,
      getFilteredAnalytics
    } = this.props;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid}>
          <DatePicker
            className={classes.datepicker}
            margin="normal"
            label="Start Date"
            value={startedAt || moment().format("YYYY-MM-DD")}
            onChange={date => handleDateChange(date, "started_at")}
            TextFieldComponent={datePicker => <CustomInput datePicker={datePicker}/>}
          />
          <DatePicker
            margin="normal"
            label="End Date"
            value={endedAt || moment().format("YYYY-MM-DD")}
            onChange={date => handleDateChange(date, "ended_at")}
            TextFieldComponent={datePicker => <CustomInput datePicker={datePicker}/>}
          />
          <button onClick={getFilteredAnalytics}>CLICK</button>
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

MaterialUIPickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MaterialUIPickers);
