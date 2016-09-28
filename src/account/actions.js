import 'babel-polyfill';
import { ACCOUNTS_REQUEST, ACCOUNTS_RESPONSE, ACCOUNTS_FAILURE } from '../constants';
import AccountService from './account-service';


export function accountsRequest() {
    return {
        type: ACCOUNTS_REQUEST
    }
}

export function accountsResponse(accounts) {
    return {
        type: ACCOUNTS_RESPONSE,
        accounts
    }
}

export function accountsFailure() {
    return {
        type: ACCOUNTS_FAILURE
    }
}

export function getAccounts() {
    return function (dispatch) {
        dispatch(accountsRequest());

        const accountService = new AccountService();

        return accountService.getAccounts()
            .then(json => {
                dispatch(accountsResponse(json));
            })
            .catch(error => {
                dispatch(accountsFailure())
            });
    }
}
