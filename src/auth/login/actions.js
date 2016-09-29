import 'babel-polyfill';
import { browserHistory } from 'react-router';


import ApiService from '../../api-service';
import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_FAILURE, LOGOUT_REQUEST } from '../../constants';

export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}

export function loginResponse(user) {
    return {
        type: LOGIN_RESPONSE,
        user
    }
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    }
}

export function logoutRequest() {
    return {
        type: LOGOUT_REQUEST
    }
}

export function login(user) {
    return function (dispatch) {
        dispatch(loginRequest());

        const api = new ApiService();
        return api.post('login', JSON.stringify(user))
            .then(json => {
                dispatch(loginResponse(json));
                browserHistory.push('/dashboard');
            })
            .catch(error => {
                dispatch(loginFailure());
            });
    }
}
