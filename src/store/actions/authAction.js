import axios from "axios";

const URL = "https://lad-network.herokuapp.com";

// ------------------------------------ Get user data ------------------------------------

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const getUserData = () => dispatch => {
  dispatch({ type: GET_USER_START });
  axios
    .get(`${URL}/api/users`)
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAILURE, payload: err.response.message });
    });
};

// ------------------------------------ Change user data ------------------------------------

export const CHANGE_USER_START = "CHANGE_USER_START";
export const CHANGE_USER_SUCCESS = "CHANGE_USER_SUCCESS";
export const CHANGE_USER_FAILURE = "CHANGE_USER_FAILURE";

export const changeUserData = user => dispatch => {
  dispatch({ type: CHANGE_USER_START });
  axios
    .put(`${URL}/api/users`, user)
    .then(res => {
      dispatch({ type: CHANGE_USER_SUCCESS, payload: { res: res.data, user } });
    })
    .then(() => {
      dispatch(getUserData());
    })
    .catch(err => {
      dispatch({
        type: CHANGE_USER_FAILURE,
        payload: err.response.data
      });
    });
};
