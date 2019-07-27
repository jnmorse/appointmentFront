import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, Picker, Button } from "react-native";
import { connect } from "react-redux";
import moment from "moment";
import MyDatePicker from "./DatePicker";
import { addAction, editAction } from "../../js/actions/index";
import styles from "../../styles";

const mapStateToProps = ({ appointmentsReducer }, ownProps) => {
  let appointment;

  if (ownProps.navigation && ownProps.navigation.state.params) {
    appointment = appointmentsReducer.find(
      item => item._id === ownProps.navigation.state.params.id
    );
  }

  return {
    initialValues: {
      Neurologist: appointment ? appointment.Neurologist : "",
      Date: appointment
        ? moment(appointment.Date).format("YYYY-MM-DD")
        : moment().format("YYYY-MM-DD"),
      Hour: appointment ? appointment.Hour : "",
      Remarks: appointment ? appointment.Remarks : "",
      Type: appointment ? appointment.Type : ""
    },
    data: appointmentsReducer,
    appointment: appointment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddAppointment: values => dispatch(addAction(values)),
    EditAppointment: appointment => dispatch(editAction(appointment))
  };
};

const validate = values => {
  const errors = {};
  if (!values.Neurologist) {
    errors.Neurologist = "Required";
  }
  if (!values.Hour) {
    errors.Hour = "Required";
  }
  //get current date
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0
  let year = today.getFullYear();
  today = year + "-" + month + "-" + day;
  //compare with Date
  if (values.Date < today) {
    errors.Date = "Please pick a valid date";
  }

  return errors;
};

class AppointmentForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.object
      }),
      navigate: PropTypes.func.isRequired
    }).isRequired,
    AddAppointment: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    EditAppointment: PropTypes.func.isRequired,
    input: PropTypes.object,
    appointment: PropTypes.shape({
      Neurologist: PropTypes.string
    })
  };

  constructor(props) {
    super(props);
  }

  renderSelectDate = ({
    date,
    input: { onChange, ...restInput },
    meta: { touched, error }
  }) => {
    return (
      <View>
        <MyDatePicker
          {...restInput}
          date={date}
          onChange={onChange}
          touched={touched}
          error={error}
        />
        {touched && (error && <Text style={{ color: "red" }}>{error}</Text>)}
      </View>
    );
  };

  renderSelect = ({ input: { onChange, value, ...restInput } }) => {
    return (
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          {...restInput}
          onValueChange={itemValue => onChange(itemValue)}
        >
          <Picker.Item label="" value="" />
          <Picker.Item label="First visit" value="First visit" />
          <Picker.Item label="Follow up" value="Follow up" />
          <Picker.Item label="MRI" value="MRI" />
          <Picker.Item label="EEG" value="EEG" />
        </Picker>
      </View>
    );
  };

  renderHour = ({
    input: { onChange, value, ...restInput },
    meta: { touched, error }
  }) => {
    return (
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onChange(itemValue)}
          {...restInput}
        >
          <Picker.Item label="" value="" />
          <Picker.Item label="9 am" value="9 " />
          <Picker.Item label="10 am" value="10 " />
          <Picker.Item label="11 am " value="11 " />
          <Picker.Item label="12 am" value="12 " />
          <Picker.Item label="1 pm" value="1 " />
          <Picker.Item label="2 pm" value="2 " />
          <Picker.Item label="3 pm" value="3 " />
          <Picker.Item label="4 pm" value="4 " />
          <Picker.Item label="5 pm" value="5 " />
        </Picker>
        {touched && (error && <Text style={{ color: "red" }}>{error}</Text>)}
      </View>
    );
  };

  renderInput = ({
    input: { onChange, ...restInput },
    meta: { touched, error }
  }) => {
    return (
      <View style={styles.input}>
        <TextInput onChangeText={onChange} {...restInput} />
        {touched && (error && <Text style={{ color: "red" }}>{error}</Text>)}
      </View>
    );
  };

  submitEdit = values => {
    let item = Object.assign(this.props.appointment, values);
    this.props.EditAppointment(item);
  };
  submit = values => {
    if (this.props.navigation.state.params === undefined) {
      this.props.AddAppointment(values);
    } else {
      this.submitEdit(values);
    }
    this.props.navigation.navigate("AppointmentsList");
  };

  render() {
    return (
      <View style={styles.formContainer}>
        <Text>
          Neurologist<Text style={styles.red}>*</Text>
        </Text>
        <Field name="Neurologist" type="text" component={this.renderInput} />
        <Text>Type</Text>
        <Field name="Type" type="select" component={this.renderSelect} />
        <Text>
          Date<Text style={styles.red}>*</Text>
        </Text>
        <Field name="Date" type="date" component={this.renderSelectDate} />
        <Text>
          Time<Text style={styles.red}>*</Text>
        </Text>
        <Field name="Hour" type="select" component={this.renderHour} />
        <Text>Remarks</Text>
        <Field name="Remarks" type="textarea" component={this.renderInput} />

        <Button
          onPress={this.props.handleSubmit(this.submit)}
          title="Submit"
          color="#e91e63"
        />
      </View>
    );
  }
}

const FormComponent = reduxForm({
  form: "Appointment",
  validate,
  enableReinitialize: true
})(AppointmentForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);
