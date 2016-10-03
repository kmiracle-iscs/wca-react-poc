import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT_REQUEST } from '../constants';

export default function reduceAuth(state = {
    isLoggedIn: false,
    bearerToken: null,
    activeCustomerId: null
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return state;

        case LOGIN_RESPONSE:
            return Object.assign({}, state, {
                isLoggedIn: true,
                bearerToken: action.user.bearerToken,
                activeCustomerId: action.user.customerId
            });

        default:
            return state
    }
}