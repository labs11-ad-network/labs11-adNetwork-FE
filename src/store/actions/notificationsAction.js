import axios from "axios";

const URL = "https://lad-network.herokuapp.com";

// ------------------------------------ Get All User Notifications ------------------------------------

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

// ------------------------------------ Update User Notification ------------------------------------

export const UPDATE_USER_NOTIFICATION_START = "UPDATE_USER_NOTIFICATION_START";
export const UPDATE_USER_NOTIFICATION_SUCCESS = "UPDATE_USER_NOTIFICATION_SUCCESS";
export const UPDATE_USER_NOTIFICATION_FAILURE = "UPDATE_USER_NOTIFICATION_FAILURE";

export const updateUserNotification = notification => dispatch => {
  dispatch({ type: UPDATE_USER_NOTIFICATION_START });
  axios
    .put(`${URL}/api/notifications/${notification.id}`, notification)
    .then(res => {
      dispatch({ type: UPDATE_USER_NOTIFICATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_NOTIFICATION_FAILURE, payload: err.response.data });
    });
};