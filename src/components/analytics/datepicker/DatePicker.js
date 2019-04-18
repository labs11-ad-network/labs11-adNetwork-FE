import "date-fns";
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

import {
  DatePickerContainer,
  DatePickerInput,
  DateFilterButton
} from "./datePickerStyles.js";

const styles = {
  grid: {
    width: "100%"
  }
};

const CustomInput = props => {
  return (
    <DatePickerInput onClick={props.datePicker.onClick}>
      <label htmlFor={props.name}> {props.datePicker.label} </label>

      <input
        name={props.name}
        value={props.datePicker.value}
        onChange={date => this.props.handleDateChange(date, "started_at")}
      />

    </DatePickerInput>
  );
};

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
          <DatePickerContainer>
            <div data-btn="report_filter-button">
              <DatePicker
                className={classes.datepicker}
                margin="normal"
                label="Start Date"
                value={startedAt || moment().format("YYYY-MM-DD")}
                onChange={date => handleDateChange(date, "started_at")}
                TextFieldComponent={datePicker => (
                  <CustomInput datePicker={datePicker} />
                )}
              />
              <DatePicker
                margin="normal"
                label="End Date"
                value={endedAt || moment().format("YYYY-MM-DD")}
                onChange={date => handleDateChange(date, "ended_at")}
                TextFieldComponent={datePicker => (
                  <CustomInput datePicker={datePicker} />
                )}
              />
              <DateFilterButton onClick={getFilteredAnalytics}>
                Filter
              </DateFilterButton>
            </div>
          </DatePickerContainer>
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

MaterialUIPickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MaterialUIPickers);
