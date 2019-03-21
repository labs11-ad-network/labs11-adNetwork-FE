import axios from "axios";

const URL = "https://lad-network.herokuapp.com/";

export const AD_ACTION_START = "AD_ACTION_START";
export const AD_ACTION_SUCCESS = "AD_ACTION_SUCCESS";
export const AD_ACTION_FAILED = "AD_ACTION_FAILED";

export const getStats = (action, started_at, ended_at) => dispatch => {
  dispatch({ type: AD_ACTION_START });
  axios
    .get(
      `${URL}/api/analytics/?action=${action}&started_at=${started_at}&ended_at=${ended_at}`
    )
    .then(res => {
      console.log("impression");
      dispatch({ type: AD_ACTION_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: AD_ACTION_FAILED, payload: error });
    });
};

export const addStats = stats => dispatch => {
  dispatch({ type: AD_ACTION_START });

  axios
    .post(`${URL}/api/analytics`, stats)
    .then(res => {
      console.log(res.data.action);
      dispatch({ type: AD_ACTION_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: AD_ACTION_FAILED, payload: error });
    });
};
