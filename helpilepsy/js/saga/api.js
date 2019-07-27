import { apiURL } from "../constants";

//send GET request to fetch appointments from api
function* getListFromApi() {
  const response = yield fetch(`${apiURL}/appointments/list`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw response.status;
  }

  const data = yield response.json();
  const list = data.appointment;
  return list;
}

//send POST request to add new appointment
function* InsertNewAppointment(appointment) {
  const response = yield fetch(`${apiURL}/appointments/add`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Neurologist: appointment.Neurologist,
      Type: appointment.Type,
      Hour: Number(appointment.Hour),
      Date: appointment.Date,
      Remarks: appointment.Remarks
    })
  });
  return response.status === 200;
}
//send POST request to update existing appointment
function* updateAppointment(updated) {
  const urlLink = `${apiURL}/appointments/edit/${updated._id}`;
  const response = yield fetch(urlLink, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Neurologist: updated.Neurologist,
      Type: updated.Type,
      Date: updated.Date,
      Hour: Number(updated.Hour),
      Remarks: updated.Remarks
    })
  }).then(r => r.json());
  yield response.json();
  yield response.status === 200;
}
//send DELETE request to delete existing appointment
function* deleteAppointment(deleted) {
  const urlLink = `${apiURL}/appointments/delete/${deleted}`;
  const response = yield fetch(urlLink, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  return response.status === 200; //true or false
}
export const Api = {
  getListFromApi,
  InsertNewAppointment,
  updateAppointment,
  deleteAppointment
};
