import { LOGIN_REQUEST, LOGIN_RESPONSE } from '../../constants';

export default function reduceAuth(state = {
    isLoggedIn: false,
    token: ""
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return state;

        case LOGIN_RESPONSE:
            return Object.assign({}, state, {isLoggedIn: true, bearerToken: action.user.bearerToken})
            return state;

        default:
            return state
    }
}
