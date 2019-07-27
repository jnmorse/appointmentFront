/**
 * @jest-environment jsdom
 */
// globals fetch
import nock from "nock";
import { Api } from "./api";

describe("Api.InsertNewAppointment()", () => {
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
    const appointment = {
      Neurologist: "First Appoinentment",
      Type: "First Visit",
      Hour: 10,
      Date: "2019-07-23",
      Remarks: "test"
    };

    // get result of calling api function
    const result = Api.InsertNewAppointment(appointment);

    // await the promise from first yield
    const response = await result.next().value;

    // pass response to next and await check
    const saved = result.next(response).value;

    expect(saved).toBe(true);

    // just to double check status code
    expect(response.status).toBe(201);
  });
});
