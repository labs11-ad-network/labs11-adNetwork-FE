import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from '../actions/authAction';

const initialState = {
  currentUser: "",
  isLoggingIn: false,
  isRegistering: false,
  isFetchingUser: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {

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
    localStorage.clear();
      return {
        ...state,
        isFetchingUser: false,
      }

    default:
      return state
  }
}