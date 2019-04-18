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

/* ------------------------------ Custom Input for Date Pickers ------------------------------ */
const CustomInput = ({ datePicker, name, handleDateChange }) => (
  <DatePickerInput onClick={datePicker.onClick}>
    <label htmlFor={name}> {datePicker.label} </label>
    <input
      name={name}
      value={datePicker.value}
      onChange={date => handleDateChange(date, "started_at")}
    />
  </DatePickerInput>
);

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
              {/* ------------------------------ Date Picker Start Date ------------------------------ */}
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
              {/* ------------------------------ Date Picker End Date ------------------------------ */}
              <DatePicker
                margin="normal"
                label="End Date"
                value={endedAt || moment().format("YYYY-MM-DD")}
                onChange={date => handleDateChange(date, "ended_at")}
                TextFieldComponent={datePicker => (
                  <CustomInput datePicker={datePicker} />
                )}
              />
              {/* ------------------------------ Date Picker Filter Button ------------------------------ */}
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
