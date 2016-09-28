import axios from 'axios';


import ConfigService from './config-service';
import { loggedIn, getBearerToken } from './auth/auth-service';


function interceptApiRequests(config) {
    if (loggedIn()) {
        config.headers.bearerToken = getBearerToken();
    }
    return config;
}

axios.interceptors.request.use(
    interceptApiRequests,
    (error) => Promise.reject(error)
);


export default class ApiService {
    constructor() {
        this.baseUrl = ConfigService.baseUrl;
        this.config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-ISCS-API-KEY': ConfigService.apiKey,
                'ISCS_API_KEY': ConfigService.apiKey
            }
        };
    }

    _createUrl(resource) {
        return `${this.baseUrl}${resource}`;
    }

    get(resource) {
        return axios.get(this._createUrl(resource), this.config)
            .then(response => response.data)
    }

    post(resource, body) {
        return axios.post(this._createUrl(resource), body, this.config)
            .then(response => response.data)
    }
}
