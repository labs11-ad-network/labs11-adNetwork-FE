import { toast } from 'react-toastify';

import{
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from '../actions/authAction';

const initialState = {
  user: {},
  isLoggingIn: false,
  isRegistering: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_START:
      return{
        ...state,
        isLoggingIn: true,
      }
    case LOGIN_USER_SUCCESS:
      localStorage.setItem('jwt', action.payload.token);
      toast.success(`Welcome ${action.payload.user['first_name']}`);
      return{
        ...state,
        user: action.payload,
        isLoggingIn: false,
      }
    case LOGIN_USER_FAILURE:
      toast.error(action.payload.message);
      return{
        ...state,
        isLoggingIn: false,
      }
    case REGISTER_USER_START:
      return{
        ...state,
        isRegistering: true,
      }
    case REGISTER_USER_SUCCESS:
      toast.success(`You have successfully registered`);
      return{
        ...state,
        isRegistering: false,
      }
    case REGISTER_USER_FAILURE:
      toast.error(action.payload.message);      
      return{
        ...state,
        isRegistering: false,
      }
    default:
      return state
  }
}