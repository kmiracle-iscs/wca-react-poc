import ApiService from '../api-service';
import { getActiveCustomerId } from '../auth/auth-service';


export default class ClaimService {
    constructor() {
        this.api = new ApiService();
    }

    getClaims() {
        const customerId = getActiveCustomerId();
        const params = {
            CustomerNumber: customerId
        };

        return this.api.tunnel('CustomerGetClaims', params, customerId);
    }
}
