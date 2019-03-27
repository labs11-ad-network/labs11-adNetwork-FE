import {
    CREATE_CUSTOMER_START,
    CREATE_CUSTOMER_SUCCESS,
    CREATE_CUSTOMER_FAILURE,
    CHARGE_CUSTOMER_START,
    CHARGE_CUSTOMER_SUCCESS,
    CHARGE_CUSTOMER_FAILURE
} from '../actions/stripeAction.js';

const initialState = {
    isCreatingCustomer: false,
    isChargingCustomer: false,
}

const stripeReducer = (state = initialState, action) => {
    switch(action.type){
        
        case CREATE_CUSTOMER_START:
            return{
                ...state,
                isCreatingCustomer: true
            }

        case CREATE_CUSTOMER_SUCCESS:
            return{
                ...state,
                isCreatingCustomer: false
            }

        case CREATE_CUSTOMER_FAILURE:
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
            return{
                ...state,
                isChargingCustomer: false
            }

        case CHARGE_CUSTOMER_FAILURE:
            return{
                ...state,
                isChargingCustomer: false
            }

        default: 
            return state
    }
}

export default stripeReducer;