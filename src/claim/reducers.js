import { CLAIMS_REQUEST, CLAIMS_RESPONSE, CLAIMS_FAILURE } from '../constants';


const reduceClaims = (state = {}, action) => {
    switch (action.type) {
        case CLAIMS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case CLAIMS_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.claims
            });

        default:
            return state
    }
};

export default reduceClaims;
