import axios from 'axios';
import { store } from '../app';

export default class AccountService {
    constructor() {
    }

    getAccounts() {
        const { bearerToken } = store.getState().auth;
        const url = 'https://api.iscs.io/api/v2/iic-ceg/customers/315/accounts',
              config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-ISCS-API-KEY': '5damt3xpd589e84ftg8bxx9n',
                    'ISCS_API_KEY': '5damt3xpd589e84ftg8bxx9n',
                    'bearerToken': bearerToken
                }
        };

        return axios.get(url, config)
            .then(response => {
                return response.data;
            });
    }

    getAccount() {

    }
}
