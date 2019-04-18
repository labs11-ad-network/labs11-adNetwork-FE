import axios from "axios";

const URL = process.env.REACT_APP_BACKEND_URL;

// ------------------------------ POST analytic action ------------------------------

export const AD_ACTION_START = "AD_ACTION_START";
export const AD_ACTION_SUCCESS = "AD_ACTION_SUCCESS";
export const AD_ACTION_FAILED = "AD_ACTION_FAILED";

export const addStats = stats => dispatch => {
  dispatch({ type: AD_ACTION_START });

  axios
    .post(`${URL}/api/analytics`, stats)
    .then(res => {
      dispatch({ type: AD_ACTION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: AD_ACTION_FAILED,
        payload: err.message.includes("Network Error") ? { message: err.message } : err.response.data 
      });
    });
};

// ------------------------------ Get analytics ------------------------------

export const GET_ANALYTICS_START = "GET_ANALYTICS_START";
export const GET_ANALYTICS_SUCCESS = "GET_ANALYTICS_SUCCESS";
export const GET_ANALYTICS_FAILURE = "GET_ANALYTICS_FAILURE";

export const getAnalytics = (id, query_string) => dispatch => {
  dispatch({ type: GET_ANALYTICS_START });
  axios
    .get(`${URL}/api/analytics/${id}${query_string || ""}`)
    .then(res => {
      dispatch({ type: GET_ANALYTICS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: GET_ANALYTICS_FAILURE,
        payload: err.message.includes("Network Error") ? { message: err.message } : err.response.data 
      });
    });
};
