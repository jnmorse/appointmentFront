import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TouchableOpacity, View, Text } from "react-native";

import { deleteAction } from "../../js/actions/index";
import styles from "../../styles/index";

const mapStateToProps = state => {
  return {
    data: state.appointmentsReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDeleteAction: deleted => dispatch(deleteAction(deleted))
  };
};

class AppointmentItem extends Component {
  static propTypes = {
    onDeleteAction: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        Neurologist: PropTypes.string.isRequired,
        Type: PropTypes.string.isRequired,
        Hour: PropTypes.number.isRequired
      })
    ).isRequired
  };

  constructor(props) {
    super(props);
  }

  deleteAppointment = appointment => {
    this.props.onDeleteAction(appointment);
  };

  render() {
    return this.props.data.map(appointment =>
      appointment !== undefined ? (
        <View style={styles.Content} key={appointment._id}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("AppointmentForm", {
                id: appointment._id
              })
            }
            style={styles.Card}
          >
            <View style={styles.type}>
              <Text style={styles.title}>{appointment.Neurologist}</Text>
              <Text style={styles.Type}>{appointment.Type}</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.Text}>{appointment.Date.slice(0, 10)}</Text>
            </View>

            <View style={styles.hour}>
              <Text style={styles.Text}>{appointment.Hour}</Text>
              {appointment.Hour < 6 ? (
                <Text style={styles.Text}>pm</Text>
              ) : (
                <Text style={styles.Text}>am</Text>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.deleteAppointment(appointment._id)}
            style={styles.deleteButton}
          >
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>
      ) : null
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentItem);
