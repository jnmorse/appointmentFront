import moment from "moment";

export const setOne = [
  {
    _id: "aaaa",
    Neurologist: "My First Appointment",
    Type: "First Visit",
    Date: moment(moment.now()).format("YYYY-MM-DD"),
    Remarks: ""
  },
  {
    _id: "aaab",
    Neurologist: "Second Appointment",
    Type: "Follow Up",
    Date: moment(moment.now()).format("YYYY-MM-DD"),
    Remarks: ""
  },
  {
    _id: "aaac",
    Neurologist: "Third Appointment",
    Type: "MRI",
    Date: moment(moment.now()).format("YYYY-MM-DD"),
    Remarks: ""
  }
];
