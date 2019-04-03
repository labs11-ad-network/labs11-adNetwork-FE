import axios from "axios";

import { getUserOffers } from "./offersAction.js"

const URL = "https://lad-network.herokuapp.com";

// ------------------------------------ Create Agreement ------------------------------------

export const CREATE_AGREEMENT_START = "CREATE_AGREEMENT_START";
export const CREATE_AGREEMENT_SUCCESS = "CREATE_AGREEMENT_SUCCESS";
export const CREATE_AGREEMENT_FAILURE = "CREATE_AGREEMENT_FAILURE";

export const createAgreement = offer => dispatch => {
  dispatch({ type: CREATE_AGREEMENT_START });
  axios
    .post(`${URL}/api/agreements`, {offer_id: offer.id})
    .then(res => {
      dispatch({ type: CREATE_AGREEMENT_SUCCESS, payload: res.data });
    })
    .then(() => {
      dispatch(getUserOffers())
    })
    .catch(err => {
      dispatch({ type: CREATE_AGREEMENT_FAILURE, payload: err.response.data });
    });
};

// ------------------------------------ Get All Agreements ------------------------------------

export const GET_AGREEMENTS_START = "GET_USER_AGREEMENTS_START";
export const GET_AGREEMENTS_SUCCESS = "GET_USER_AGREEMENTS_SUCCESS";
export const GET_AGREEMENTS_FAILURE = "GET_USER_AGREEMENTS_FAILURE";

export const getAgreements = () => dispatch => {
  dispatch({ type: GET_AGREEMENTS_START });
  axios
    .get(`${URL}/api/agreements`)
    .then(res => {
      dispatch({ type: GET_AGREEMENTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_AGREEMENTS_FAILURE, payload: err.response.data });
    });
};

// ------------------------------------ Update Agreement ------------------------------------

export const CHANGE_AGREEMENT_START = "CHANGE_AGREEMENT_START";
export const CHANGE_AGREEMENT_SUCCESS = "CHANGE_AGREEMENT_SUCCESS";
export const CHANGE_AGREEMENT_FAILURE = "CHANGE_AGREEMENT_FAILURE";

export const updateAgreement = agreement => dispatch => {
  dispatch({ type: CHANGE_AGREEMENT_START });
  axios
  .get(`${URL}/api/agreements/${agreement.id}`, agreement)
  .then(res => {
    dispatch({ type: CHANGE_AGREEMENT_SUCCESS, payload: {res: res.data, agreement} });
  })
  .catch(err => {
    dispatch({ type: CHANGE_AGREEMENT_FAILURE, payload: err.response.data });
  });
}

// ------------------------------------ Delete Agreement ------------------------------------

export const DELETE_AGREEMENT_START = "DELETE_AGREEMENT_START";
export const DELETE_AGREEMENT_SUCCESS = "DELETE_AGREEMENT_SUCCESS";
export const DELETE_AGREEMENT_FAILURE = "DELETE_AGREEMENT_FAILURE";

export const deleteAgreement = id => dispatch => {
  dispatch({ type: DELETE_AGREEMENT_START })
  axios
    .delete(`${URL}/api/agreements/${id}`)
    .then(res => {
      dispatch({ type: DELETE_AGREEMENT_SUCCESS, payload: res.data })
    })
    .then(() => {
      dispatch(getUserOffers());
    })
    .catch(err => {
      dispatch({ type: DELETE_AGREEMENT_SUCCESS, payload: err.response.data })
    })
}