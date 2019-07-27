import {
  FETCH_APPOINTMENTS,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_APPOINTMENT,
  ADD_APPOINTMENT_SUCCESS,
  EDIT_SUCCESS,
  EDIT_APPOINTMENT,
  DELETE_APPOINTMENT,
  DELETE_SUCCESS
} from "../actions/actionTypes";
//Saga effects
import { put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";

function* fetchList() {
  try {
    const list = yield Api.getListFromApi();
    yield put({ type: FETCH_SUCCESS, payload: list });
  } catch (error) {
    yield put({ type: FETCH_FAIL, error });
  }
}
export function* watchFetchList() {
  yield takeLatest(FETCH_APPOINTMENTS, fetchList);
}

export function* addNewAppointment(action) {
  try {
    const result = yield Api.InsertNewAppointment(action.payload);
    if (result === true) {
      yield put({ type: ADD_APPOINTMENT_SUCCESS, payload: action.payload });
    }
  } catch (error) {
    yield put({ type: "ADD_APPOINTMENT_FAIL" });
  }
}
export function* watchAddAppointment() {
  yield takeLatest(ADD_APPOINTMENT, addNewAppointment);
}

function* updateAppointment(action) {
  try {
    const result = yield Api.updateAppointment(action.payload);
    if (result) {
      yield put({ type: EDIT_SUCCESS, updated: action.payload });
    }
  } catch (error) {
    yield put({ type: "EDIT_FAIL" });
  }
}
export function* watchEditAppointment() {
  yield takeLatest(EDIT_APPOINTMENT, updateAppointment);
}

function* deleteAppointment(action) {
  try {
    const result = yield Api.deleteAppointment(action.payload);
    if (result) {
      yield put({ type: DELETE_SUCCESS, payload: action.payload });
    }
  } catch (error) {
    yield put({ type: "DELETE_FAIL" });
  }
}
export function* watchDeleteAppointment() {
  yield takeLatest(DELETE_APPOINTMENT, deleteAppointment);
}
