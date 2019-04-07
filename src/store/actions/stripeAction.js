import axios from "axios";

import { getUserData, changeUserData } from "./authAction.js";

const URL = process.env.REACT_APP_BACKEND_URL;

// ------------------------------ Get Payouts ------------------------------

export const GET_PAYOUT_START = "GET_PAYOUT_START";
export const GET_PAYOUT_SUCCESS = "GET_PAYOUT_SUCCESS";
export const GET_PAYOUT_FAILURE = "GET_PAYOUT_FAILURE";

export const getPayouts = () => dispatch => {
  dispatch({ type: GET_PAYOUT_START });
  axios
    .get(`${URL}/api/checkout/payout`)
    .then(res => {
      dispatch({ type: GET_PAYOUT_SUCCESS, payload: res.data.payouts });
    })
    .catch(err => {
      dispatch({ type: GET_PAYOUT_FAILURE, payload: err.response.status === 500 ? { message: "Internal server error" } : err.response.data });
    });
};

// ------------------------------ Get Payments ------------------------------

export const GET_PAYMENTS_START = "GET_PAYMENTS_START";
export const GET_PAYMENTS_SUCCESS = "GET_PAYMENTS_SUCCESS";
export const GET_PAYMENTS_FAILURE = "GET_PAYMENTS_FAILURE";

export const getPayments = () => dispatch => {
  dispatch({ type: GET_PAYMENTS_START });
  axios
    .get(`${URL}/api/checkout/payments`)
    .then(res => {
      dispatch({ type: GET_PAYMENTS_SUCCESS, payload: res.data.payments });
    })
    .catch(err => {
      dispatch({ type: GET_PAYMENTS_FAILURE, payload: err.response.status === 500 ? { message: "Internal server error" } : err.response.data });
    });
};

// ------------------------------ Create Stripe Customer ------------------------------

export const CREATE_CUSTOMER_START = "CREATE_CUSTOMER_START";
export const CREATE_CUSTOMER_SUCCESS = "CREATE_CUSTOMER_SUCCESS";
export const CREATE_CUSTOMER_FAILURE = "CREATE_CUSTOMER_FAILURE";

export const createCustomer = () => dispatch => {
  dispatch({ type: CREATE_CUSTOMER_START });
  axios
    .post(`${URL}/api/checkout/create_customer`)
    .then(res => {
      dispatch({ type: CREATE_CUSTOMER_SUCCESS, payload: res.data });
    })
    .then(() => {
      dispatch(getUserData());
    })
    .catch(err => {
      dispatch({ type: CREATE_CUSTOMER_FAILURE, payload: err.response.status === 500 ? { message: "Internal server error" } : err.response.data });
    });
};

// ------------------------------ Charge Stripe Customer ------------------------------

export const CHARGE_CUSTOMER_START = "CHARGE_CUSTOMER_START";
export const CHARGE_CUSTOMER_SUCCESS = "CHARGE_CUSTOMER_SUCCESS";
export const CHARGE_CUSTOMER_FAILURE = "CHARGE_CUSTOMER_FAILURE";

export const chargeCustomer = () => dispatch => {
  dispatch({ type: CHARGE_CUSTOMER_START });
  axios
    .post(`${URL}/api/checkout/charge_customer`)
    .then(res => {
      dispatch({ type: CHARGE_CUSTOMER_SUCCESS, payload: res.data });
    })
    .then(() => {
      dispatch(getUserData());
      dispatch(getPayments());
    })
    .catch(err => {
      dispatch({ type: CHARGE_CUSTOMER_FAILURE, payload: err.response.status === 500 ? { message: "Internal server error" } : err.response.data });
    });
};

// ------------------------------ Pay Stripe Customer ------------------------------

export const PAYOUT_CUSTOMER_START = "PAYOUT_CUSTOMER_START";
export const PAYOUT_CUSTOMER_SUCCESS = "PAYOUT_CUSTOMER_SUCCESS";
export const PAYOUT_CUSTOMER_FAILURE = "PAYOUT_CUSTOMER_FAILURE";

export const payoutCustomer = () => dispatch => {
  dispatch({ type: PAYOUT_CUSTOMER_START });
  axios
    .post(`${URL}/api/checkout/payout`)
    .then(res => {
      dispatch({ type: PAYOUT_CUSTOMER_SUCCESS, payload: res.data });
    })
    .then(() => {
      dispatch(getUserData());
      dispatch(getPayouts());
    })
    .catch(err => {
      dispatch({ type: PAYOUT_CUSTOMER_FAILURE, payload: err.response.status === 500 ? { message: "Internal server error" } : err.response.data });
    });
};

// ------------------------------ Connect Stripe Customer ------------------------------

export const CONNECT_CUSTOMER_START = "CONNECT_CUSTOMER_START";
export const CONNECT_CUSTOMER_SUCCESS = "CONNECT_CUSTOMER_SUCCESS";
export const CONNECT_CUSTOMER_FAILURE = "CONNECT_CUSTOMER_FAILURE";

export const connectCustomer = (code, history) => dispatch => {
  dispatch({ type: CONNECT_CUSTOMER_START });

  const body = new FormData();

  body.append('client_secret', process.env.REACT_APP_STRIPE_SECRET);
  body.append('code', code);
  body.append('grant_type', "authorization_code")

  console.log(body)

  axios
    .post("https://connect.stripe.com/oauth/token", `client_secret=sk_test_NPSbgtTaYenHZNGj02N7YCeM&code=${code}&grant_type=authorization_code`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        crossdomain: true,
        withCredentials: true
      }
    })
    .then(res => {
      changeUserData({ stripe_payout_id: res.data.stripe_user_id })
      dispatch({ type: CONNECT_CUSTOMER_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: CONNECT_CUSTOMER_SUCCESS, payload: err })
    })
}