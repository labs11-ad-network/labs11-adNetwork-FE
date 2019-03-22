/* eslint-disable no-mixed-operators */
import { toast } from 'react-toastify';

import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  SET_LOADING, FB_DATA_SUCCESS,
  GOOGLE_DATA_SUCCESS
} from '../actions/authAction';

const initialState = {
  user: {},
  currentUser: "",
  fbData: {},
  googleData: {},
  isLoggingIn: false,
  isRegistering: false,
  isFetchingUser: false,
  loading: false,
  fbClicked: false,
  googleClicked: false,

}
async function errMessage(message) {
  if (message === "User already exists")
    console.log('--- user not exist hit -----')
  toast.error(message);
  await setTimeout(() => {
    console.log('--- setimeout hit -----')
    window.location.href = "/register"
  }, 2000);
}



export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOGIN_USER_START:
      return {
        ...state,
        isLoggingIn: true,

      }
    case LOGIN_USER_SUCCESS:
      localStorage.setItem('jwt', action.payload.token);
      toast.success(`Welcome ${action.payload['first_name'] || action.payload.user['first_name']}`);
      return {
        ...state,
        user: action.payload,
        isLoggingIn: false,
      }
    case LOGIN_USER_FAILURE:
      toast.error(action.payload.email);
      toast.error(action.payload.message);
      return {
        ...state,
        isLoggingIn: false,
      }
    case REGISTER_USER_START:
      return {
        ...state,
        isRegistering: true,
      }
    case REGISTER_USER_SUCCESS:
      toast.success(`You have successfully registered`);
      return {
        ...state,
        isRegistering: false,
      }
    case REGISTER_USER_FAILURE:
      toast.error(action.payload.email);
      toast.error(action.payload.first_name);
      toast.error(action.payload.last_name);
      toast.error(action.payload.phone);
      action.payload.message && errMessage(action.payload.message)

      return {
        ...state,
        isRegistering: false,

      }
    case GET_USER_START:
      return {
        ...state,
        isFetchingUser: true
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isFetchingUser: false,
      }
    case GET_USER_FAILURE:
      return {
        ...state,
        isFetchingUser: false,
      }
    case FB_DATA_SUCCESS:
      return {
        ...state,
        fbData: action.payload,
        fbClicked: true,
        loading: false,
        googleData: {},
      }

    case GOOGLE_DATA_SUCCESS:
      return {
        ...state,
        googleData: action.payload,
        loading: false,
        googleClicked: true,
        fbData: {}
      }
    default:
      return state
  }
}