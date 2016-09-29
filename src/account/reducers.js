import { ACCOUNTS_REQUEST, ACCOUNTS_RESPONSE, ACCOUNTS_FAILURE } from '../constants';

export default function reduceAccounts(state = {}, action) {
    switch (action.type) {
        case ACCOUNTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
            // return state;

        case ACCOUNTS_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.accounts
            });
        // return action.accounts;

        default:
            return state
    }
}
