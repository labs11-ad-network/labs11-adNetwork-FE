import { toast } from "react-toastify";

import {
  GET_AD_START,
  GET_AD_SUCCESS,
  GET_AD_FAILURE,
  CREATE_AD_START,
  CREATE_AD_SUCCESS,
  CREATE_AD_FAILURE,
  GET_OFFER_ADS_START,
  GET_OFFER_ADS_SUCCESS,
  GET_OFFER_ADS_FAILURE,
  DELETE_AD_START,
  DELETE_AD_SUCCESS,
  DELETE_AD_FAILURE,
  UPDATE_AD_STATUS_START,
  UPDATE_AD_STATUS_SUCCESS,
  UPDATE_AD_STATUS_FAILURE,
  GET_AFFILIATE_ADS_START,
  GET_AFFILIATE_ADS_SUCCESS,
  GET_AFFILIATE_ADS_FAILURE
} from "../actions/adAction";

const initialState = {
  isLoading: false,
  servedAd: {},
  offerAds: [],
  affiliateAds: []
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AD_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_AD_SUCCESS:
      return {
        ...state,
        servedAd: action.payload,
        isLoading: false
      };

    case GET_AD_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    case CREATE_AD_START:
      return {
        ...state,
        isLoading: true
      };

    case CREATE_AD_SUCCESS:
      toast.success("Ad was created");
      return {
        ...state,
        isLoading: false
      };

    case CREATE_AD_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    case GET_OFFER_ADS_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_OFFER_ADS_SUCCESS:
      return {
        ...state,
        offerAds: action.payload,
        isLoading: false
      };

    case GET_OFFER_ADS_FAILURE:
      return {
        ...state,
        offerAds: [],
        isLoading: false
      };

    case DELETE_AD_START:
      return {
        ...state,
        isDeletingAd: true
      };

    case DELETE_AD_SUCCESS:
      toast.success("Ad was deleted");
      return {
        ...state,
        isLoading: false
      };

    case DELETE_AD_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    case UPDATE_AD_STATUS_START:
      return {
        ...state,
        isLoading: true
      };

    case UPDATE_AD_STATUS_SUCCESS:
      toast.success(
        `${action.payload.ad.size} ad was ${
          action.payload.ad.active ? "disabled" : "enabled"
        }`
      );
      return {
        ...state,
        isLoading: false
      };

    case UPDATE_AD_STATUS_FAILURE:
      toast.error(action.payload.message);
      return {
        ...state,
        isLoading: false
      };

    case GET_AFFILIATE_ADS_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_AFFILIATE_ADS_SUCCESS:
      return {
        ...state,
        affiliateAds: action.payload,
        isLoading: false
      };

    case GET_AFFILIATE_ADS_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
