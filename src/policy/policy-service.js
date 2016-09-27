import fetch from 'isomorphic-fetch';
import { store } from '../app';

export default class PolicyService {
    constructor() {
    }

    getPolicies() {
        const { bearerToken } = store.getState().auth;
        const config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-ISCS-API-KEY': '5damt3xpd589e84ftg8bxx9n',
                'ISCS_API_KEY': '5damt3xpd589e84ftg8bxx9n',
                'bearerToken': bearerToken
            }
        };

        return fetch(`https://api.iscs.io/api/v2/iic-ceg/customers/315/policies`, config)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            });
    }

    getPolicy() {

    }
}
