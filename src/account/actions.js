import 'babel-polyfill';
import { ACCOUNTS_REQUEST, ACCOUNTS_RESPONSE, ACCOUNTS_FAILURE } from '../constants';
import AccountService from './account-service';


export const accountsRequest = () => {
    return {
        type: ACCOUNTS_REQUEST
    }
};

export const accountsResponse = (accounts) => {
    return {
        type: ACCOUNTS_RESPONSE,
        accounts
    }
};

export const accountsFailure = () => {
    return {
        type: ACCOUNTS_FAILURE
    }
};

export const getAccounts = () => dispatch => {
    dispatch(accountsRequest());

    const accountService = new AccountService();

    return accountService.getAccounts()
        .then(json => {
            dispatch(accountsResponse(json));
        })
        .catch(error => {
            dispatch(accountsFailure())
        });
};
