import {
  FETCH_APPOINTMENTS,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_APPOINTMENT,
  EDIT_APPOINTMENT,
  EDIT_SUCCESS,
  DELETE_APPOINTMENT,
  DELETE_SUCCESS
} from "./actionTypes";

export const fetchAction = sort => {
  return {
    type: FETCH_APPOINTMENTS,
    sort
  };
};
//Action sent by Redux-saga
export const fetchSuccessAction = list => {
  return {
    type: FETCH_SUCCESS,
    list
  };
};

export const fetchFailAction = error => {
  return {
    type: FETCH_FAIL,
    error
  };
};

export const addAction = appointment => {
  return {
    type: ADD_APPOINTMENT,
    payload: appointment
  };
};
//Update existing appointment
export const editAction = updated => {
  return {
    type: EDIT_APPOINTMENT,
    payload: updated
  };
};
//Action sent by Redux-saga
export const editSuccessAction = updated => {
  return {
    type: EDIT_SUCCESS,
    payload: updated
  };
};
//Delete existing appointment
export const deleteAction = deleted => {
  return {
    type: DELETE_APPOINTMENT,
    payload: deleted
  };
};
//Action sent by Redux-saga
export const deleteSuccessAction = deleted => {
  return {
    type: DELETE_SUCCESS,
    payload: deleted
  };
};
