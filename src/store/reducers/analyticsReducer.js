import {
  AD_ACTION_SUCCESS,
  AD_ACTION_FAILED,
  AD_ACTION_START,
  OFFER_ANALYTICS_START,
  OFFER_ANALYTICS_SUCCESS,
  OFFER_ANALYTICS_FAILURE
} from "../actions/analyticsAction";

const initialState = {
  isLoading: false,
  error: {},
  offerAnalytics: [],
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

    case OFFER_ANALYTICS_START:
      return{
        ...state,
        isLoading: true,
      }

    case OFFER_ANALYTICS_SUCCESS:
      return{
        ...state,
        isLoading: false,
        offerAnalytics: action.payload
      }

    case OFFER_ANALYTICS_FAILURE:
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
