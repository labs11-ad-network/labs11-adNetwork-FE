import { combineReducers } from 'redux';
import authReducer from './authReducers.js';
import adReducer from './adReducer.js'

export default combineReducers({
  authReducer,
  adReducer
});