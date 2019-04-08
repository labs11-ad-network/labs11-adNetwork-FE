import { toast } from "react-toastify";

import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  CHANGE_USER_START,
  CHANGE_USER_SUCCESS,
  CHANGE_USER_FAILURE
} from "../actions/authAction";

const initialState = {
  currentUser: "",
  isLoggingIn: false,
  isRegistering: false,
  isFetchingUser: false,
  isUpdatingUser: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_START:
      return {
        ...state,
        isFetchingUser: true
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isFetchingUser: false
      };

    case GET_USER_FAILURE:
      return {
        ...state,
        isFetchingUser: false
      };

    case CHANGE_USER_START:
      return {
        ...state,
        isUpdatingUser: true
      };

    case CHANGE_USER_SUCCESS:
      toast.success(`Your account was sucessfully updated`);
      return {
        ...state,
        isUpdatingUser: false
      };

    case CHANGE_USER_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isUpdatingUser: false
      };

    default:
      return state;
  }
}
