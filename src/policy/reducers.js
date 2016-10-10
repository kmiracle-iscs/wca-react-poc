import { POLICIES_REQUEST, POLICIES_RESPONSE, POLICIES_FAILURE } from '../constants';

const reducePolicies = (state = {}, action) => {
    switch (action.type) {
        case POLICIES_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case POLICIES_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.policies
            });

        default:
            return state
    }
};

export default reducePolicies;
