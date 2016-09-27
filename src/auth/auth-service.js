import { store } from '../app';
import { logoutRequest } from './login/actions';

export function loggedIn() {
    return store.getState().auth.isLoggedIn;
}

export function logout() {
    store.dispatch(logoutRequest());
}
