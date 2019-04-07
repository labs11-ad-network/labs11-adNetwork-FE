import { toast } from "react-toastify";

import {
  CREATE_CUSTOMER_START,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILURE,
  CHARGE_CUSTOMER_START,
  CHARGE_CUSTOMER_SUCCESS,
  CHARGE_CUSTOMER_FAILURE,
  PAYOUT_CUSTOMER_START,
  PAYOUT_CUSTOMER_SUCCESS,
  PAYOUT_CUSTOMER_FAILURE,
  GET_PAYOUT_START,
  GET_PAYOUT_SUCCESS,
  GET_PAYOUT_FAILURE,
  GET_PAYMENTS_START,
  GET_PAYMENTS_SUCCESS,
  GET_PAYMENTS_FAILURE,
  CONNECT_CUSTOMER_START,
  CONNECT_CUSTOMER_SUCCESS,
  CONNECT_CUSTOMER_FAILURE
} from "../actions/stripeAction.js";

const initialState = {
  isLoading: false,
  payouts: [],
  payments: []
};

const stripeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CUSTOMER_START:
      return {
        ...state,
        isLoading: true
      };

    case CREATE_CUSTOMER_SUCCESS:
      toast.success(action.payload.status);
      return {
        ...state,
        isLoading: false
      };

    case CREATE_CUSTOMER_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    case CHARGE_CUSTOMER_START:
      return {
        ...state,
        isLoading: true
      };

    case CHARGE_CUSTOMER_SUCCESS:
      toast.success(action.payload.status);
      return {
        ...state,
        isLoading: false
      };

    case CHARGE_CUSTOMER_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    case PAYOUT_CUSTOMER_START:
      return {
        ...state,
        isLoading: true
      };

    case PAYOUT_CUSTOMER_SUCCESS:
      toast.warn(action.payload.status);
      return {
        ...state,
        isLoading: false
      };

    case PAYOUT_CUSTOMER_FAILURE:
      toast.error(action.payload.message.message);
      return {
        ...state,
        isLoading: false
      };

    case GET_PAYOUT_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_PAYOUT_SUCCESS:
      return {
        ...state,
        payouts: action.payload,
        isLoading: false
      };

    case GET_PAYOUT_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    case GET_PAYMENTS_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_PAYMENTS_SUCCESS:
      return {
        ...state,
        payments: action.payload,
        isLoading: false
      };

    case GET_PAYMENTS_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    case CONNECT_CUSTOMER_START:
      return{
        ...state,
        isLoading: true
      }

    case CONNECT_CUSTOMER_SUCCESS:
      return{
        ...state,
        isLoading: false
      }

    case CONNECT_CUSTOMER_FAILURE:
      toast.error(action.payload)
      return{
        ...state, 
        isLoading: false,
      }

    default:
      return state;
  }
};

export default stripeReducer;
