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

}
  
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
