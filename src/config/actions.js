import 'babel-polyfill';
import { CONFIG_REQUEST, CONFIG_RESPONSE, CONFIG_FAILURE, CHANGE_LANGUAGE } from '../constants';
import { getConfig as getConfigSvc} from './config-service';


export const configRequest = () => {
    return {
        type: CONFIG_REQUEST
    }
};

export const configResponse = (config) => {
    return {
        type: CONFIG_RESPONSE,
        config
    }
};

export const configFailure = () => {
    return {
        type: CONFIG_FAILURE
    }
};

export const getConfig = () => dispatch => {
    dispatch(configRequest());

    return getConfigSvc()
        .then(json => {
            dispatch(configResponse(json));
        })
        .catch(error => {
            dispatch(configFailure())
        });
};

export const changeLanguage = (language) => {
    return {
        type: CHANGE_LANGUAGE,
        language
    }
};
