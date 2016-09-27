import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_FAILURE } from './constants';
import { LOGOUT_REQUEST } from './constants';
import { POLICIES_REQUEST, POLICIES_RESPONSE, POLICIES_FAILURE } from './constants';
import { ACCOUNTS_REQUEST, ACCOUNTS_RESPONSE, ACCOUNTS_FAILURE } from './constants';
import { TIMELINE_EVENTS_REQUEST, TIMELINE_EVENTS_RESPONSE, TIMELINE_EVENTS_FAILURE } from './constants';


import reduceAuth from './auth/login/reducers';
import reducePolicies from './policy/reducers';
import reduceAccounts from './account/reducers';
import reduceTimeline from './timeline/reducers';

export default function customers(state = {}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                'auth': reduceAuth(state['auth'], action)
            });

        case LOGIN_RESPONSE:
            return Object.assign({}, state, {
                'auth': reduceAuth(state['auth'], action)
            });

        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                'auth': reduceAuth(state['auth'], action)
            });

        case LOGOUT_REQUEST:
            return Object.assign({}, state, {
                'auth': reduceAuth(state['auth'], action)
            });

        case POLICIES_REQUEST:
            return Object.assign({}, state, {
                'policies': reducePolicies(state['policies'], action)
            });

        case POLICIES_RESPONSE:
            return Object.assign({}, state, {
                'policies': reducePolicies(state['policies'], action)
            });

        case ACCOUNTS_REQUEST:
            return Object.assign({}, state, {
                'accounts': reduceAccounts(state['accounts'], action)
            });

        case ACCOUNTS_RESPONSE:
            return Object.assign({}, state, {
                'accounts': reduceAccounts(state['accounts'], action)
            });

        case TIMELINE_EVENTS_REQUEST:
            return Object.assign({}, state, {
                'events': reduceTimeline(state['events'], action)
            });

        case TIMELINE_EVENTS_RESPONSE:
            return Object.assign({}, state, {
                'events': reduceTimeline(state['events'], action)
            });

        case TIMELINE_EVENTS_FAILURE:
            return Object.assign({}, state, {
                'events': reduceTimeline(state['events'], action)
            });

        default:
            return state
    }
}
