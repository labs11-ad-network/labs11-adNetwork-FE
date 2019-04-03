import { toast } from "react-toastify";

import {
  GET_USER_OFFERS_START,
  GET_USER_OFFERS_SUCCESS,
  GET_USER_OFFERS_FAILURE,
  CREATE_OFFER_START,
  CREATE_OFFER_SUCCESS,
  CREATE_OFFER_FAILURE,
  CHANGE_OFFER_STATUS_START,
  CHANGE_OFFER_STATUS_SUCCESS,
  CHANGE_OFFER_STATUS_FAILURE,
  DELETE_OFFER_START,
  DELETE_OFFER_SUCCESS,
  DELETE_OFFER_FAILURE
} from "../actions/offersAction";

const initialState = {
  isLoading: false,
  userOffers: []
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_OFFERS_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_USER_OFFERS_SUCCESS:
      return {
        ...state,
        userOffers: action.payload,
        isLoading: false
      };

    case GET_USER_OFFERS_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    case CREATE_OFFER_START:
      return {
        ...state,
        isLoading: true
      };

    case CREATE_OFFER_SUCCESS:
      toast.success("Offer was created successfully");
      return {
        ...state,
        isLoading: false
      };

    case CREATE_OFFER_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    case CHANGE_OFFER_STATUS_START:
      return {
        ...state,
        isLoading: true
      };

    case CHANGE_OFFER_STATUS_SUCCESS:
      toast.success(
        `${action.payload.offer.name} was ${
          action.payload.offer.status ? "disabled" : "enabled"
        }`
      );
      return {
        ...state,
        userOffers: action.payload.res,
        isLoading: false
      };

    case CHANGE_OFFER_STATUS_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    case DELETE_OFFER_START:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_OFFER_SUCCESS:
      toast.success(`Offer was deleted`);
      return {
        ...state,
        isLoading: false
      };

    case DELETE_OFFER_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
