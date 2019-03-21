import axios from 'axios';

const URL = "http://71.65.239.221:5000";

// setloading 
export const SET_LOADING = 'SET_LOADING';

// ---------------------- login action --------------------------
export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';


export const loginUser = user => async dispatch => {
  dispatch({ type: LOGIN_USER_START });
  try {
    const res = await axios.post(`${URL}/api/users/login`, user);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAILURE, payload: error.response.data });
  }
}

// ---------------------- register action --------------------------

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const registerUser = user => async dispatch => {
  dispatch({ type: REGISTER_USER_START });

  const res = await axios.post(`${URL}/api/users/register`, user);

  if (res.status !== 201) {
    dispatch({ type: REGISTER_USER_FAILURE, payload: res.data });
  } else {
    dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
  }
}


// ---------------------- Fb new user action --------------------------
export const FB_DATA_SUCCESS = 'FB_DATA_SUCCESS'

export const facebookUserData = (user) => dispatch => {
  dispatch(setLoading())

  dispatch({
    type: FB_DATA_SUCCESS,
    payload: user
  })

}

// ---------------------- Fb & Googl action --------------------------
export const GOOGLE_DATA_SUCCESS = 'GOOGLE_DATA_SUCCESS'

export const googleUserData = (user) => dispatch => {
  console.log('google - user', user);

  dispatch(setLoading())
  dispatch({
    type: GOOGLE_DATA_SUCCESS,
    payload: user
  })
}






// ---------------------- Loading action --------------------------
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
