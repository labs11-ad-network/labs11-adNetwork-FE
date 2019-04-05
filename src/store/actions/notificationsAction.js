import axios from "axios";

const URL = "https://lad-network.herokuapp.com";

export const GET_USER_NOTIFICATIONS_START = "GET_USER_NOTIFICATIONS_START";
export const GET_USER_NOTIFICATIONS_SUCCESS = "GET_USER_NOTIFICATIONS_SUCCESS";
export const GET_USER_NOTIFICATIONS_FAILURE = "GET_USER_NOTIFICATIONS_FAILURE";

export const getUserNotifications = () => dispatch => {
  dispatch({ type: GET_USER_NOTIFICATIONS_START });
  axios
    .get(`${URL}/api/notifications`)
    .then(res => {
      dispatch({ type: GET_USER_NOTIFICATIONS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_NOTIFICATIONS_FAILURE, payload: err.response.data });
    });
};