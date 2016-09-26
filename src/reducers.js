import { REQUEST_CUSTOMER, REQUEST_LOGIN } from './constants';
import reduceAuth from './auth/login/reducers';

export default function customers(state = {}, action) {
    switch (action.type) {
        case REQUEST_CUSTOMER:
            return Object.assign({}, state, {activeCustomer: action.customerNumber});

        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                ["auth"]: reduceAuth(state["auth"], action)
            });
        default:
            return state
    }
}
