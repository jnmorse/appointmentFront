//Saga effects
import { fork } from "redux-saga/effects";
import {
  watchFetchList,
  watchAddAppointment,
  watchEditAppointment,
  watchDeleteAppointment
} from "./appointmentsSaga";

export default function* rootSaga() {
  yield fork(watchFetchList);
  yield fork(watchAddAppointment);
  yield fork(watchEditAppointment);
  yield fork(watchDeleteAppointment);
}
