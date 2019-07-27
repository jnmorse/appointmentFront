import moment from "moment";
import * as ActionType from "../actions/actionTypes";
import { setOne } from "./__fixtures__/example-data";
import appointmentsReducer from "./appointmentsReducer";

// Describe what we are testing
describe("appointmentsReducer", () => {
  // What test are being done on it
  test("When initialized it should return an empty array", () => {
    // The action type here doesn't matter as long as its one the reducer won't handle
    const results = appointmentsReducer(undefined, { type: "@TEST/@INIT" });

    // What we expect https://jestjs.io/docs/en/expect.html
    expect(results).toEqual(expect.arrayContaining([]));
  });

  test("FETCH_SUCCESS should return the list of appointments", () => {
    const results = appointmentsReducer([], {
      type: ActionType.FETCH_SUCCESS,
      payload: setOne
    });

    expect(results).toEqual(expect.arrayContaining(setOne));
  });

  test("EDIT_SUCCESS", () => {
    const changed = {
      _id: "aaac",
      Neurologist: "Test Name",
      Type: "EEG",
      Date: moment().format("YYYY-MM-DD"),
      Remarks: "was edited"
    };

    const results = appointmentsReducer(setOne, {
      type: ActionType.EDIT_SUCCESS,
      payload: changed
    });

    expect(results).toContainEqual(changed);
  });

  test("ADD_APPOINTMENT", () => {
    const addItem = {
      _id: "aaaa",
      Neurologist: "My Next Appointment",
      Type: "First Visit",
      Date: moment().format("YYYY-MM-DD"),
      Remarks: "was added"
    };

    const results = appointmentsReducer([], {
      type: ActionType.ADD_APPOINTMENT_SUCCESS,
      payload: addItem
    });

    expect(results).toEqual(expect.arrayContaining([addItem]));
  });

  test("DELETE_SUCCESS, returns one less item", () => {
    const deleted = [
      {
        _id: "aaab",
        Neurologist: "Second Appointment",
        Type: "Follow Up",
        Date: moment(moment.now()).format("YYYY-MM-DD"),
        Remarks: ""
      }
    ];

    const results = appointmentsReducer(setOne, {
      type: ActionType.DELETE_SUCCESS,
      payload: "aaab"
    });

    expect(results).toEqual(expect.not.arrayContaining(deleted));
  });
});
