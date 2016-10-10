import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT_REQUEST } from '../constants';


const reduceAuth = (state = {
    isAuthenticated: false,
    bearerToken: null,
    activeCustomerId: null
}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return state;

        case LOGIN_RESPONSE:
            return Object.assign({}, state, {
                isAuthenticated: true,
                bearerToken: action.user.bearerToken,
                activeCustomerId: action.user.customerId
            });

        default:
            return state
    }
};

export default reduceAuth;
