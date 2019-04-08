import {
  AD_ACTION_SUCCESS,
  AD_ACTION_FAILED,
  AD_ACTION_START,
  GET_ANALYTICS_START,
  GET_ANALYTICS_SUCCESS,
  GET_ANALYTICS_FAILURE
} from "../actions/analyticsAction";

const initialState = {
  isLoading: false,
  error: {},
  analytics: [],
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
    
    case AD_ACTION_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case GET_ANALYTICS_START:
      return{
        ...state,
        isLoading: true,
      }

    case GET_ANALYTICS_SUCCESS:
      return{
        ...state,
        isLoading: false,
        analytics: action.payload
      }

    case GET_ANALYTICS_FAILURE:
      return{
        ...state,
        isLoading: false,
        error: action.payload
      }

    default:
      return state;
  }
};

export default analyticsReducer;
