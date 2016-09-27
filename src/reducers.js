import { CUSTOMER_REQUEST, LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_FAILURE } from './constants';
import { POLICIES_REQUEST, POLICIES_RESPONSE, POLICIES_FAILURE } from './constants';
import reduceAuth from './auth/login/reducers';
import reducePolicies from './policy/reducers';

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

        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                "auth": reduceAuth(state["auth"], action)
            });

        case POLICIES_REQUEST:
            return Object.assign({}, state, {
                "policies": reducePolicies(state['policies'], action)
            });

        case POLICIES_RESPONSE:
            return Object.assign({}, state, {
                "policies": reducePolicies(state['policies'], action)
            });

        default:
            return state
    }
}
