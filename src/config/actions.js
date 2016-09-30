import 'babel-polyfill';
import { CONFIG_REQUEST, CONFIG_RESPONSE, CONFIG_FAILURE } from '../constants';
import ConfigService from './config-service';

export function configRequest() {
    return {
        type: CONFIG_REQUEST
    }
}

export function configResponse(config) {
    return {
        type: CONFIG_RESPONSE,
        config
    }
}

export function configFailure() {
    return {
        type: CONFIG_FAILURE
    }
}

export function getConfig() {
    return function (dispatch) {
        dispatch(configRequest());

        const configService = new ConfigService();

        return configService.getConfig()
            .then(json => {
                dispatch(configResponse(json));
            })
            .catch(error => {
                dispatch(configFailure())
            });
    }
}
