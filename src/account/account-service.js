import ApiService from '../api-service';
import { getActiveCustomerId } from '../auth/auth-service';


export default class AccountService {
    constructor() {
        this.api = new ApiService();
    }

    getAccounts() {
        return this.api.get(`customers/${getActiveCustomerId()}/accounts`);
    }

    getAccount() {

    }
}
