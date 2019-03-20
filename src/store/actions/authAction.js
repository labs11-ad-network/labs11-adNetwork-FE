import axios from 'axios';

const URL = "http://71.65.239.221:5000";

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const loginUser = user => dispatch => {
  dispatch({ type: LOGIN_USER_START });
    axios.post(`${URL}/api/users/login`, user)
      .then(res => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_USER_FAILURE, payload: err.response.data });
      })
}

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const registerUser = user => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  axios.post(`${URL}/api/users/register`, user)
    .then(res => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });             
    })
    .catch(err => {
      dispatch({ type: REGISTER_USER_FAILURE, payload: err.response.data });
    })
}