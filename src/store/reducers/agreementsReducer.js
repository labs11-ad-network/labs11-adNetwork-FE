import { toast } from 'react-toastify';

import{
  GET_USER_AGREEMENTS_START,
  GET_USER_AGREEMENTS_SUCCESS,
  GET_USER_AGREEMENTS_FAILURE,
  CREATE_AGREEMENT_START,
  CREATE_AGREEMENT_SUCCESS,
  CREATE_AGREEMENT_FAILURE,
  CHANGE_AGREEMENT_START,
  CHANGE_AGREEMENT_SUCCESS,
  CHANGE_AGREEMENT_FAILURE,
  DELETE_AGREEMENT_START,
  DELETE_AGREEMENT_SUCCESS,
  DELETE_AGREEMENT_FAILURE
} from '../actions/agreementsAction';

const initialState = {
  userAgreements: [],
  isFetchingAgreements: false,
  isCreatingAgreement: false,
  isUpdatingAgreement: false,
  isDeletingAgreement: false
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

    case CREATE_AGREEMENT_START:
    return{
      ...state,
      isCreatingAgreement: true,
    }

    case CREATE_AGREEMENT_SUCCESS:
      toast.success('Agreement was created successfully');
      return{
        ...state,
        isCreatingAgreement: false
      }

    case CREATE_AGREEMENT_FAILURE:
      toast.error(action.payload.message);
      return{
        ...state,
        isCreatingAgreement: false
      }

    case CHANGE_AGREEMENT_START:
    return{
      ...state,
      isUpdatingAgreement: true
    }

    case CHANGE_AGREEMENT_SUCCESS:
    toast.success(`${action.payload.agreement.name} was updated`)
      return{
        ...state,
        isUpdatingAgreement: false
      }

    case CHANGE_AGREEMENT_FAILURE:
      toast.error(action.payload.message)
      return{
        ...state,
        isUpdatingAgreement: false,
      }

    case DELETE_AGREEMENT_START:
      return{
        ...state,
        isDeletingAgreement: true
      }

    case DELETE_AGREEMENT_SUCCESS:
      toast.success(`Agreement was deleted`)
      return{
        ...state,
        isDeletingAgreement: false
      }

    case DELETE_AGREEMENT_FAILURE:
      toast.error(action.payload.message)
      return{
        ...state,
        isDeletingAgreement: false
      }

    default:
      return state  
  }
}