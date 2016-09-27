import { POLICIES_REQUEST, POLICIES_RESPONSE, POLICIES_FAILURE } from '../constants';

export default function reducePolicies(state = [], action) {
    switch (action.type) {
        case POLICIES_REQUEST:
            return state;

        case POLICIES_RESPONSE:
            return action.policies;

        default:
            return state
    }
}
