import { CUSTOMER_REQUEST } from './constants';

export function requestCustomer(customerNumber) {
    return {
        type: CUSTOMER_REQUEST,
        customerNumber
    }
}
