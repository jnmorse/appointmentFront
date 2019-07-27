import React, { Component } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-native-datepicker";

export default class MyDatePicker extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, value } = this.props;

    return (
      <DatePicker
        style={{ width: "100%", marginBottom: 15 }}
        date={value}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2019-05-01"
        maxDate="2022-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderColor: "grey"
          }
        }}
        onDateChange={date => onChange(date)}
      />
    );
  }
}
