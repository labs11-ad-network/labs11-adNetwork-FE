import { toast } from "react-toastify";

import {
  AD_ACTION_SUCCESS,
  AD_ACTION_FAILED,
  AD_ACTION_START
} from "../actions/analyticsAction";

const initialState = {
  isLoading: false,
  error: {},
  stats: {
    action: "",
    ip: "",
    browser: "",
    referrer: "",
    agreement_id: ""
  },
  result: {}
};

const analyticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AD_ACTION_FAILED:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case AD_ACTION_START:
      return {
        ...state,
        isLoading: true
      };

    case AD_ACTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        result: action.payload
      };
    default:
      return state;
  }
};

export default analyticsReducer;
