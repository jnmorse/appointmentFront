import { combineReducers } from "redux";
import appointmentsReducer from "./appointmentsReducer";
import {reducer as formReducer } from "redux-form";


const allReducers = combineReducers({
  appointmentsReducer,
  //you can add more reducers here, separated by , !
  form: formReducer
});
export default allReducers;
