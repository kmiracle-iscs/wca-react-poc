import { CONFIG_REQUEST, CONFIG_RESPONSE, CONFIG_FAILURE } from '../constants';

export default function reduceConfig(state = {}, action) {
    switch (action.type) {
        case CONFIG_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case CONFIG_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                features: action.config.features
            });

        default:
            return state
    }
}
