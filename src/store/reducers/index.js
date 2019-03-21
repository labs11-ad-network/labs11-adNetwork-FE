import { combineReducers } from "redux";
import authReducer from "./authReducers.js";
import adReducer from "./adReducer.js";
import offersReducer from "./offersReducer.js";
import analyticsReducer from "./analyticsReducer";

export default combineReducers({
  authReducer,
  adReducer,
  offersReducer,
  analyticsReducer
});
