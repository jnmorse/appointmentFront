import {
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_APPOINTMENT_SUCCESS,
  EDIT_SUCCESS,
  DELETE_SUCCESS
} from "../actions/actionTypes";

const appointmentsReducer = (list = [], action) => {
  switch (action.type) {
  case FETCH_SUCCESS:
    return action.payload;
  case FETCH_FAIL:
    return [];
  case ADD_APPOINTMENT_SUCCESS:
    return [...list, action.payload];
  case EDIT_SUCCESS:
    return list.map(eachAppointment =>
      eachAppointment._id === action.payload._id
        ? { ...eachAppointment, ...action.payload }
        : eachAppointment
    );
  case DELETE_SUCCESS:
    return list.filter(eachAppointment => {
      return eachAppointment._id !== action.payload;
    });

  default:
    return list; //state does not change
  }
};
export default appointmentsReducer;
