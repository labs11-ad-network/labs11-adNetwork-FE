import axios from "axios";

const URL = "https://lad-network.herokuapp.com";

// ------------------------------------ Get All User Agreements ------------------------------------

export const GET_USER_AGREEMENTS_START = "GET_USER_AGREEMENTS_START";
export const GET_USER_AGREEMENTS_SUCCESS = "GET_USER_AGREEMENTS_SUCCESS";
export const GET_USER_AGREEMENTS_FAILURE = "GET_USER_AGREEMENTS_FAILURE";

export const getUserAgreements = () => dispatch => {
  dispatch({ type: GET_USER_AGREEMENTS_START });
  axios
    .get(`${URL}/api/agreements`)
    .then(res => {
      dispatch({ type: GET_USER_AGREEMENTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_AGREEMENTS_FAILURE, payload: err.response.data });
    });
};