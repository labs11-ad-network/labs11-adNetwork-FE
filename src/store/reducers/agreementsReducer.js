// import { toast } from 'react-toastify';

import{
  GET_USER_AGREEMENTS_START,
  GET_USER_AGREEMENTS_SUCCESS,
  GET_USER_AGREEMENTS_FAILURE,
} from '../actions/agreementsAction';

const initialState = {
  userAgreements: [],
  isFetchingAgreements: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_AGREEMENTS_START:
      return{
        ...state,
        isFetchingAgreements: true
      }
    case GET_USER_AGREEMENTS_SUCCESS:
      return{
        ...state,
        userAgreements: action.payload,
        isFetchingAgreements: false,
      }
    case GET_USER_AGREEMENTS_FAILURE:
      return{
        ...state,
        isFetchingAgreements: false,
      }
    default:
      return state  
  }
}