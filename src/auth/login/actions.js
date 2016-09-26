import fetch from 'isomorphic-fetch';
import { LOGIN_REQUEST, LOGIN_RESPONSE } from '../../constants';

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

export function login(user) {
    return function (dispatch) {
        dispatch(loginRequest());

        return fetch(`https://api.iscs.io/api/v2/iic-ceg/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-ISCS-API-KEY': '5damt3xpd589e84ftg8bxx9n',
                'ISCS_API_KEY': '5damt3xpd589e84ftg8bxx9n'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(json => dispatch(loginResponse(json)));
    }
}
