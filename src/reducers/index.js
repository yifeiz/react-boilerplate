import { combineReducers } from "redux";
import fillerReducer from "./fillerReducer";

export default combineReducers({
  someProp: fillerReducer,
});
