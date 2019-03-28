import { toast } from "react-toastify";

import {
    CREATE_CUSTOMER_START,
    CREATE_CUSTOMER_SUCCESS,
    CREATE_CUSTOMER_FAILURE,
    CHARGE_CUSTOMER_START,
    CHARGE_CUSTOMER_SUCCESS,
    CHARGE_CUSTOMER_FAILURE,
    PAYOUT_CUSTOMER_START,
    PAYOUT_CUSTOMER_SUCCESS,
    PAYOUT_CUSTOMER_FAILURE
} from '../actions/stripeAction.js';

const initialState = {
    isCreatingCustomer: false,
    isChargingCustomer: false,
    isPayingCustomer: false,
}

const stripeReducer = (state = initialState, action) => {
    switch(action.type){

        case CREATE_CUSTOMER_START:
            return{
                ...state,
                isCreatingCustomer: true
            }

        case CREATE_CUSTOMER_SUCCESS:
            toast.success(action.payload.status)
            return{
                ...state,
                isCreatingCustomer: false
            }

        case CREATE_CUSTOMER_FAILURE:
            toast.error(action.payload.message)            
            return{
                ...state,
                isCreatingCustomer: false
            }

        case CHARGE_CUSTOMER_START:
            return{
                ...state,
                isChargingCustomer: true
            }

        case CHARGE_CUSTOMER_SUCCESS:
            toast.success(action.payload.status)            
            return{
                ...state,
                isChargingCustomer: false
            }

        case CHARGE_CUSTOMER_FAILURE:
            toast.error(action.payload.message)                        
            return{
                ...state,
                isChargingCustomer: false
            }

        case PAYOUT_CUSTOMER_START:
            return{
                ...state,
                isPayingCustomer: true
            }

        case PAYOUT_CUSTOMER_SUCCESS:
            toast.warn(action.payload.status);
            return{
                ...state,
                isPayingCustomer: false
            }

        case PAYOUT_CUSTOMER_FAILURE:
            toast.error(action.payload.message.message)
            return{
                ...state,
                isPayingCustomer: false
            }

        default: 
            return state
    }
}

export default stripeReducer;