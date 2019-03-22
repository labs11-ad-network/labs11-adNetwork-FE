import axios from "axios";

const URL = "https://lad-network.herokuapp.com";

// ------------------------------------ Get All User Offers ------------------------------------

export const GET_USER_OFFERS_START = "GET_USER_OFFERS_START";
export const GET_USER_OFFERS_SUCCESS = "GET_USER_OFFERS_SUCCESS";
export const GET_USER_OFFERS_FAILURE = "GET_USER_OFFERS_FAILURE";

export const getUserOffers = () => dispatch => {
  dispatch({ type: GET_USER_OFFERS_START });
  axios
    .get(`${URL}/api/offers`)
    .then(res => {
      dispatch({ type: GET_USER_OFFERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_OFFERS_FAILURE, payload: err.response.data });
    });
};

// ------------------------------------ Create Offers ------------------------------------

export const CREATE_OFFER_START = "CREATE_OFFER_START";
export const CREATE_OFFER_SUCCESS = "CREATE_OFFER_SUCCESS";
export const CREATE_OFFER_FAILURE = "CREATE_OFFER_FAILURE";

export const createOffer = offer => dispatch => {
  dispatch({ type: CREATE_OFFER_START });
  axios
    .post(`${URL}/api/offers`, offer)
    .then(res => {
      dispatch({ type: CREATE_OFFER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_OFFER_FAILURE, payload: err.response.data });
    });
};
