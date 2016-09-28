import axios from 'axios';


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
        this.baseUrl = 'https://api.iscs.io/api/v2/iic-ceg/';
        this.config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-ISCS-API-KEY': '5damt3xpd589e84ftg8bxx9n',
                'ISCS_API_KEY': '5damt3xpd589e84ftg8bxx9n'
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
