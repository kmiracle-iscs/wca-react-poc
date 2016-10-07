import ApiService from '../api-service';
import { getActiveCustomerId } from '../auth/auth-service';


export default class AgentService {
    constructor() {
        this.api = new ApiService();
    }

    getAgent() {
        return this.api.get(`customers/${getActiveCustomerId()}/agent`);
    }
}
