import 'babel-polyfill';
import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';
import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_FAILURE } from '../../constants';

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

export function loginFailure(user) {
    return {
        type: LOGIN_FAILURE
    }
}

export function login(user) {
    return function (dispatch) {
        dispatch(loginRequest());

        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-ISCS-API-KEY': '5damt3xpd589e84ftg8bxx9n',
                'ISCS_API_KEY': '5damt3xpd589e84ftg8bxx9n'
            },
            body: JSON.stringify(user)
        };

        return fetch(`https://api.iscs.io/api/v2/iic-ceg/login`, config)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
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
