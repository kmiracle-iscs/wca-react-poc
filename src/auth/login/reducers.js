import { REQUEST_LOGIN } from '../../constants';

export default function reduceAuth(state = {
    isLoggedIn: false,
    token: ""
}, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            const { username, password } = action.creds;
            return Object.assign({}, state, {isLoggedIn: true, token:"asfasdfasdf", username, password});
        default:
            return state
    }
}
