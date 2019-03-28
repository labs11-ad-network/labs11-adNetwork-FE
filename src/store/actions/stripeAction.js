import axios from 'axios';

const URL = "https://lad-network.herokuapp.com";

// ------------------------------ Create Stripe Customer ------------------------------

export const CREATE_CUSTOMER_START = "CREATE_CUSTOMER_START";
export const CREATE_CUSTOMER_SUCCESS = "CREATE_CUSTOMER_SUCCESS";
export const CREATE_CUSTOMER_FAILURE = "CREATE_CUSTOMER_FAILURE";

export const createCustomer = () => dispatch => {
    dispatch({ type: CREATE_CUSTOMER_START })
    axios.post(`${URL}/api/checkout/create_customer`)
        .then(res => {
            dispatch({ type: CREATE_CUSTOMER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: CREATE_CUSTOMER_FAILURE, payload: err.response.data })
        })
}

// ------------------------------ Charge Stripe Customer ------------------------------

export const CHARGE_CUSTOMER_START = "CHARGE_CUSTOMER_START";
export const CHARGE_CUSTOMER_SUCCESS = "CHARGE_CUSTOMER_SUCCESS";
export const CHARGE_CUSTOMER_FAILURE = "CHARGE_CUSTOMER_FAILURE";

export const chargeCustomer = amount => dispatch => {
    dispatch({ type: CHARGE_CUSTOMER_START })
    axios.post(`${URL}/api/checkout/charge_customer`, {amount})
        .then(res => {
            dispatch({ type: CHARGE_CUSTOMER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: CHARGE_CUSTOMER_FAILURE, payload: err.response.data })
        })
}