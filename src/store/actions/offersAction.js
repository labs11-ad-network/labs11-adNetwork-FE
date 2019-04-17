import axios from "axios";

const URL = process.env.REACT_APP_BACKEND_URL;

// ------------------------------------ Get All User Offers ------------------------------------

export const GET_OFFERS_START = "GET_OFFERS_START";
export const GET_OFFERS_SUCCESS = "GET_OFFERS_SUCCESS";
export const GET_OFFERS_FAILURE = "GET_OFFERS_FAILURE";

export const getOffers = () => dispatch => {
  dispatch({ type: GET_OFFERS_START });
  axios
    .get(`${URL}/api/offers`)
    .then(res => {
      dispatch({ type: GET_OFFERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_OFFERS_FAILURE, payload: err.message.includes("Network Error") ? { message: err.message } : err.response.data });
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
    .then(() => {
      dispatch(getOffers());
    })
    .catch(err => {
      dispatch({ type: CREATE_OFFER_FAILURE, payload: err.message.includes("Network Error") ? { message: err.message } : err.response.data });
    });
};

// ------------------------------------ Update Offer Status ------------------------------------

export const CHANGE_OFFER_STATUS_START = "UPDATE_OFFER_STATUS_START";
export const CHANGE_OFFER_STATUS_SUCCESS = "UPDATE_OFFER_STATUS_SUCCESS";
export const CHANGE_OFFER_STATUS_FAILURE = "UPDATE_OFFER_STATUS_FAILURE";

export const changeOfferStatus = offer => dispatch => {
  dispatch({ type: CHANGE_OFFER_STATUS_START });
  axios
    .put(`${URL}/api/offers/${offer.id}`, { status: !offer.status })
    .then(res => {
      dispatch({
        type: CHANGE_OFFER_STATUS_SUCCESS,
        payload: { res: res.data, offer }
      });
    })
    .then(() => {
      dispatch(getOffers())
    })
    .catch(err => {
      dispatch({ type: CHANGE_OFFER_STATUS_FAILURE, payload: err.message.includes("Network Error") ? { message: err.message } : err.response.data });

    });
};

// ------------------------------------ Update Offer ------------------------------------

export const UPDATE_OFFER_START = "UPDATE_OFFER_START";
export const UPDATE_OFFER_SUCCESS = "UPDATE_OFFER_SUCCESS";
export const UPDATE_OFFER_FAILURE = "UPDATE_OFFER_FAILURE";

export const startUpdatingOffer = offer => {
  return {
    type: UPDATE_OFFER_START,
    payload: offer
  }
}

export const updateOffer = offer => dispatch => {
  axios
    .put(`${URL}/api/offers/${offer.id}`, offer)
    .then(res => {
      dispatch({ type:UPDATE_OFFER_SUCCESS, payload: res.data })
    })
    .then(() => {
      dispatch(getOffers())
    })
    .catch(err => {
      dispatch({ type:UPDATE_OFFER_SUCCESS, payload: err.message.includes("Network Error") ? { message: err.message } : err.response.data })
    })
}

// ------------------------------------ Delete Offer ------------------------------------

export const DELETE_OFFER_START = "DELETE_OFFER_START";
export const DELETE_OFFER_SUCCESS = "DELETE_OFFER_SUCCESS";
export const DELETE_OFFER_FAILURE = "DELETE_OFFER_FAILURE";

export const deleteOffer = offer => dispatch => {
  dispatch({ type: DELETE_OFFER_START });
  axios
    .delete(`${URL}/api/offers/${offer.id}`)
    .then(res => {
      dispatch({
        type: DELETE_OFFER_SUCCESS,
        payload: { res: res.data, offer }
      });
    })
    .then(() => {
      dispatch(getOffers())
    })
    .catch(err => {
      dispatch({ type: DELETE_OFFER_SUCCESS, payload: err.message.includes("Network Error") ? { message: err.message } : err.response.data })
    })
}

