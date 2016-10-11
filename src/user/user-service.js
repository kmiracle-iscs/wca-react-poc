import ApiService from '../api-service';
import { getActiveCustomerId } from '../auth/auth-service';


export default class UseryService {
    constructor() {
        this.api = new ApiService();
    }

    getUser() {
        return this.api.get(`customers/${getActiveCustomerId()}`);
    }
}
