import { expectSaga } from "redux-saga-test-plan";
import nock from "nock";

import { addNewAppointment } from "./appointmentsSaga";

describe("addNewAppointment saga", () => {
  let scope;

  beforeEach(() => {
    // Mocking the api call, so not hitting actually backend
    scope = nock("http://192.168.1.129:5000")
      // .log(console.log) // can help check if actually matching
      .post("/appointments/add")
      .reply(200, null, {
        "Access-Control-Allow-Orgin": "*",
        "Content-Type": "application/json"
      });
  });

  afterEach(() => {
    scope.done();
  });

  test("will save an appointment", async () => {
    const action = {
      payload: {
        Neurologist: "First Appoinentment",
        Type: "First Visit",
        Hour: 10,
        Date: "2019-07-23",
        Remarks: "test"
      }
    };

    return expectSaga(addNewAppointment, action)
      .put({
        type: "ADD_APPOINTMENT_SUCCESS",
        payload: action.payload
      })
      .run();
  });
});
