import { CUSTOMER_REQUEST, LOGIN_REQUEST, LOGIN_RESPONSE } from './constants';
import reduceAuth from './auth/login/reducers';

export default function customers(state = {}, action) {
    switch (action.type) {
        case CUSTOMER_REQUEST:
            return Object.assign({}, state, {activeCustomer: action.customerNumber});

        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                "auth": reduceAuth(state["auth"], action)
            });

        case LOGIN_RESPONSE:
            return Object.assign({}, state, {
                "auth": reduceAuth(state["auth"], action)
            });
        
        default:
            return state
    }
}
