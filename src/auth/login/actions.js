import 'babel-polyfill';
import { browserHistory } from 'react-router';
import axios from 'axios';
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

        const url = 'https://api.iscs.io/api/v2/iic-ceg/login',
              data = JSON.stringify(user),
              config = {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-ISCS-API-KEY': '5damt3xpd589e84ftg8bxx9n',
                        'ISCS_API_KEY': '5damt3xpd589e84ftg8bxx9n'
                    }
              };
              
        return axios.post(url, data, config)
            .then(response => {
                return response.data;
            })
            .then(json => {
                dispatch(loginResponse(json));
                browserHistory.push('/dashboard');
            })
            .catch(error => {
                dispatch(loginFailure())
            });
    }
}
