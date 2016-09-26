import { REQUEST_CUSTOMER } from './constants';

export function requestCustomer(customerNumber) {
    return {
        type: REQUEST_CUSTOMER,
        customerNumber
    }
}
