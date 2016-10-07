import 'babel-polyfill';
import { browserHistory } from 'react-router';


import ApiService from '../api-service';
import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_FAILURE, LOGOUT_REQUEST } from '../constants';


export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
};

export const loginResponse = (user) => {
    return {
        type: LOGIN_RESPONSE,
        user
    }
};

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
};

export const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem('iscs-wca-react-poc');
    dispatch(logoutRequest());
};

export const login = (user) => dispatch => {
    dispatch(loginRequest());

    const api = new ApiService();
    return api.post('login', JSON.stringify(user))
        .then(json => {
            localStorage.setItem('iscs-wca-react-poc', JSON.stringify({
                bearerToken: json.bearerToken,
                activeCustomerId: json.customerId
            }));
            dispatch(loginResponse(json));
            browserHistory.push('/dashboard');
        })
        .catch(error => {
            dispatch(loginFailure());
        });
};
