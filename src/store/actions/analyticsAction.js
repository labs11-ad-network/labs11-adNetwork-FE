import axios from "axios";

const URL = process.env.REACT_APP_BACKEND_URL;

export const AD_ACTION_START = "AD_ACTION_START";
export const AD_ACTION_SUCCESS = "AD_ACTION_SUCCESS";
export const AD_ACTION_FAILED = "AD_ACTION_FAILED";

// ------------------------------ Get analytics ------------------------------

export const getAnalyticsByDate = (started_at, ended_at) => dispatch => {
  dispatch({ type: AD_ACTION_START });
  axios
    .get(`${URL}/api/analytics/?started_at=${started_at}&ended_at=${ended_at}`)
    .then(res => {
      dispatch({ type: GET_ANALYTICS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: AD_ACTION_FAILED,
        payload:
          err.response.status === 500
            ? { message: "Internal server error" }
            : err.response.data
      });
    });
};

// ------------------------------ POST analytic action ------------------------------

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
        payload:
          err.response.status === 500
            ? { message: "Internal server error" }
            : err.response.data
      });
    });
};

// ------------------------------ Get analytics ------------------------------

export const GET_ANALYTICS_START = "GET_ANALYTICS_START";
export const GET_ANALYTICS_SUCCESS = "GET_ANALYTICS_SUCCESS";
export const GET_ANALYTICS_FAILURE = "GET_ANALYTICS_FAILURE";

export const getAnalytics = (id, started_at, ended_at) => dispatch => {
  dispatch({ type: GET_ANALYTICS_START });
  if (started_at && ended_at) {
    axios
      .get(
        `${URL}/api/analytics/?started_at=${started_at}&ended_at=${ended_at}`
      )
      .then(res => {
        dispatch({ type: GET_ANALYTICS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: GET_ANALYTICS_FAILURE,
          payload:
            err.response.status === 500
              ? { message: "Internal server error" }
              : err.response.data
        });
      });
  } else {
    axios
      .get(`${URL}/api/analytics/${id}`)
      .then(res => {
        dispatch({ type: GET_ANALYTICS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: GET_ANALYTICS_FAILURE,
          payload:
            err.response.status === 500
              ? { message: "Internal server error" }
              : err.response.data
        });
      });
  }

};
