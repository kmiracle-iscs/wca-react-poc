import axios from 'axios';
import _ from 'lodash';


import { baseUrl, apiKey } from './config/config-service';
import { loggedIn, getBearerToken } from './auth/auth-service';


const isApiRequest = (config) => {
    return _.startsWith(config.url, baseUrl);
};

const interceptApiRequests = (config) => {
    if (loggedIn() && isApiRequest(config)) {
        config.headers.bearerToken = getBearerToken();
    }
    return config;
};

axios.interceptors.request.use(
    interceptApiRequests,
    (error) => Promise.reject(error)
);


export default class ApiService {
    constructor() {
        this.baseUrl = baseUrl;
        this.config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-ISCS-API-KEY': apiKey,
                'ISCS_API_KEY': apiKey
            }
        };
    }

    _createUrl(resource) {
        return `${this.baseUrl}${resource}`;
    }

    get(resource) {
        return axios.get(this._createUrl(resource), this.config)
            .then(response => response.data);
    }

    post(resource, body) {
        return axios.post(this._createUrl(resource), body, this.config)
            .then(response => response.data);
    }

    tunnel(method, params, customerId) {
        const payload = {
            method,
            params: [params],
            id: '1',
            jsonrpc: '2.0'
        };

        return axios.post(this._createUrl(`customers/${customerId}/tunnel`), payload, this.config)
            .then(response => response.data);
    }
}
