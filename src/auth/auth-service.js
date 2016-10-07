import { store } from '../app';
import { logout as logoutAction } from './actions';


export const loggedIn = () => {
    return store.getState().auth.isLoggedIn;
};

export const hasSavedSession = () => {
    return !!localStorage.getItem('iscs-wca-react-poc');
};

export const logout = () => {
    store.dispatch(logoutAction());
};

export const getActiveCustomerId = () => {
    return store.getState().auth.activeCustomerId;
};

export const getBearerToken = () => {
    return store.getState().auth.bearerToken;
};
