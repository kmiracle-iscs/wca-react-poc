import ApiService from '../api-service';
import { getActiveCustomerId } from '../auth/auth-service';


export default class PolicyService {
    constructor() {
        this.api = new ApiService();
    }

    getPolicies() {
        return this.api.get(`customers/${getActiveCustomerId()}/policies`);
    }

    getPolicy() {

    }
}
