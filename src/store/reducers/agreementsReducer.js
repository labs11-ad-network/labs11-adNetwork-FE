import { toast } from "react-toastify";

import {
  GET_AGREEMENTS_START,
  GET_AGREEMENTS_SUCCESS,
  GET_AGREEMENTS_FAILURE,
  CREATE_AGREEMENT_START,
  CREATE_AGREEMENT_SUCCESS,
  CREATE_AGREEMENT_FAILURE,
  CHANGE_AGREEMENT_START,
  CHANGE_AGREEMENT_SUCCESS,
  CHANGE_AGREEMENT_FAILURE,
  DELETE_AGREEMENT_START,
  DELETE_AGREEMENT_SUCCESS,
  DELETE_AGREEMENT_FAILURE
} from "../actions/agreementsAction";

const initialState = {
  isLoading: false,
  agreements: []
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AGREEMENTS_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_AGREEMENTS_SUCCESS:
      return {
        ...state,
        agreements: action.payload,
        isLoading: false
      };

    case GET_AGREEMENTS_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    case CREATE_AGREEMENT_START:
      return {
        ...state,
        isLoading: true
      };

    case CREATE_AGREEMENT_SUCCESS:
      toast.success("Agreement was created successfully");
      return {
        ...state,
        isLoading: false
      };

    case CREATE_AGREEMENT_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    case CHANGE_AGREEMENT_START:
      return {
        ...state,
        isLoading: true
      };

    case CHANGE_AGREEMENT_SUCCESS:
      toast.success(`${action.payload.agreement.name} was updated`);
      return {
        ...state,
        isLoading: false
      };

    case CHANGE_AGREEMENT_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    case DELETE_AGREEMENT_START:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_AGREEMENT_SUCCESS:
      toast.success(`Agreement was deleted`);
      return {
        ...state,
        isLoading: false
      };

    case DELETE_AGREEMENT_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
