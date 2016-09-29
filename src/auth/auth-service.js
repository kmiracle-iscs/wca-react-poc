import { store } from '../app';
import { logoutRequest } from './login/actions';

export function loggedIn() {
    return store.getState().auth.isLoggedIn;
}

export function hasSavedSession() {
    return !!localStorage.getItem('iscs-wca-react-poc');
}

export function logout() {
    store.dispatch(logoutRequest());
}

export function getActiveCustomerId() {
    return store.getState().auth.activeCustomerId;
}

export function getBearerToken() {
    return store.getState().auth.bearerToken;
}
