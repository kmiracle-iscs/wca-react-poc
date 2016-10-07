import { CONFIG_REQUEST, CONFIG_RESPONSE, CONFIG_FAILURE, CHANGE_LANGUAGE } from '../constants';

const reduceConfig = (state = {}, action) => {
    switch (action.type) {
        case CONFIG_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case CONFIG_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                features: action.config.features,
                language: action.config.language,
                translations: action.config.translations
            });

        case CHANGE_LANGUAGE:
            return Object.assign({}, state, {
               language: action.language
            });

        default:
            return state
    }
};

export default reduceConfig;
