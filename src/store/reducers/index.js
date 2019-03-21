import { combineReducers } from 'redux';
import authReducer from './authReducers.js';
import adReducer from './adReducer.js'
import offersReducer from './offersReducer.js';

export default combineReducers({
  authReducer,
  adReducer,
  offersReducer
});