import { toast } from 'react-toastify';

import{
  GET_AD_START,
  GET_AD_SUCCESS,
  GET_AD_FAILURE,
  CREATE_AD_START,
  CREATE_AD_SUCCESS,
  CREATE_AD_FAILURE,
} from '../actions/adAction';

const initialState = {
    servedAd: {},
    isFetchingAd: false,
    isCreatingAd: false
}
  
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AD_START:
      return{
        ...state,
        isFetchingAd: true
      }
    case GET_AD_SUCCESS:
      return{
        ...state,
        servedAd: action.payload,
        isFetchingAd: false
      }
    case GET_AD_FAILURE:
      return{
        ...state,
        isFetchingAd: false
      }
    case CREATE_AD_START:
      return{
        ...state,
        isCreatingAd: true,
      }
    case CREATE_AD_SUCCESS:
      toast.success('Ad was created')
      return{
        ...state,
        isCreatingAd: false
      }
    case CREATE_AD_FAILURE:
      toast.error(action.payload.message)
      return{
        ...state,
        isCreatingAd: false
      }
    default:
      return state
  }
}
