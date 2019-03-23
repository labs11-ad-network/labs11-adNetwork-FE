import { toast } from 'react-toastify';

import{
  GET_AD_START,
  GET_AD_SUCCESS,
  GET_AD_FAILURE,
  CREATE_AD_START,
  CREATE_AD_SUCCESS,
  CREATE_AD_FAILURE,
  GET_OFFER_ADS_START,
  GET_OFFER_ADS_SUCCESS,
  GET_OFFER_ADS_FAILURE
} from '../actions/adAction';

const initialState = {
    servedAd: {},
    offerAds: [],
    isFetchingAd: false,
    isCreatingAd: false,
    isGetingOfferAds: false
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

    case GET_OFFER_ADS_START:
      return{
        ...state,
        isGetingOfferAds: true
      }
    
    case GET_OFFER_ADS_SUCCESS:
      return{
        ...state,
        offerAds: action.payload,
        isGetingOfferAds: false
      }

    case GET_OFFER_ADS_FAILURE:
      return{
        ...state,
        offerAds: [],
        isGetingOfferAds: false
      }

    default:
      return state
  }
}
