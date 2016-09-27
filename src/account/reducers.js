import { ACCOUNTS_REQUEST, ACCOUNTS_RESPONSE, ACCOUNTS_FAILURE } from '../constants';

export default function reduceAccounts(state = [], action) {
    switch (action.type) {
        case ACCOUNTS_REQUEST:
            return state;

        case ACCOUNTS_RESPONSE:
            return action.accounts;

        default:
            return state
    }
}
