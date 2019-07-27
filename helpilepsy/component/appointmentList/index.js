import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import AppointmentItem from "../appointmentItem/index";
import { fetchAction } from "../../js/actions/index";
import styles from "../../styles/index";

const mapStateToProps = state => {
  return {
    data: state.appointmentsReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchAction: () => dispatch(fetchAction())
  };
};

class AppointmentsList extends Component {
  static propTypes = {
    onFetchAction: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      dismiss: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.onFetchAction();
  }

  render() {
    return (
      <ScrollView
        maximumZoomScale={3}
        minimumZoomScale={0.2}
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.scrollContainer}
      >
        <AppointmentItem navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentsList);
