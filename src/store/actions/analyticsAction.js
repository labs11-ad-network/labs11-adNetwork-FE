import axios from "axios";

const URL = "https://lad-network.herokuapp.com";

export const AD_ACTION_START = "AD_ACTION_START";
export const AD_ACTION_SUCCESS = "AD_ACTION_SUCCESS";
export const AD_ACTION_FAILED = "AD_ACTION_FAILED";

// ------------------------------ Get analytics ------------------------------

export const getStats = (action, started_at, ended_at) => dispatch => {
  dispatch({ type: AD_ACTION_START });
  axios
    .get(
      `${URL}/api/analytics/?action=${action}&started_at=${started_at}&ended_at=${ended_at}`
    )
    .then(res => {
      dispatch({ type: AD_ACTION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: AD_ACTION_FAILED, payload: err.response.status === 500 ? { message: "Internal server error" } : err.response.data });
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
      dispatch({ type: AD_ACTION_FAILED, payload: err.response.status === 500 ? { message: "Internal server error" } : err.response.data });
    });
};

// ------------------------------ Get analytics for given offer ------------------------------

export const OFFER_ANALYTICS_START = "OFFER_ANALYTICS_START";
export const OFFER_ANALYTICS_SUCCESS = "OFFER_ANALYTICS_SUCCESS";
export const OFFER_ANALYTICS_FAILURE = "OFFER_ANALYTICS_FAILURE";

export const getOfferAnalytics = offerId => dispatch => {
  dispatch({ type: OFFER_ANALYTICS_START });
  axios
    .get(`${URL}/api/analytics/${offerId}`)
    .then(res => {
      dispatch({ type: OFFER_ANALYTICS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: OFFER_ANALYTICS_FAILURE, payload: err.response.status === 500 ? { message: "Internal server error" } : err.response.data });
    });
};
