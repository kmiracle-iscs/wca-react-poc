import moment from 'moment';

const events = [
    {
        type: 'Auto',
        id: '1',
        policyNumber: 'CAA000008',
        date: moment().format('ll'),
        detail: '$631.08',
        action: 'Payment Received',
        status: 'success'
    },
    {
        type: 'Home',
        id: '2',
        policyNumber: 'HO0000343',
        date: moment().format('ll'),
        detail: '$7.77',
        action: 'Payment Received',
        status: 'success'
    },
    {
        type: 'Auto',
        id: '3',
        policyNumber: 'CAA000008',
        date: moment().format('ll'),
        detail: 'Explosion',
        action: 'Claim Reported',
        status: 'success'
    },
    {
        type: 'Auto',
        id: '4',
        policyNumber: 'CAA00000264',
        date: moment().format('ll'),
        detail: '$631.08',
        action: 'Payment Denied',
        status: 'error'
    }
];


export default class ActivityService {
    constructor() {

    }

    getRecentEvents() {
        return new Promise(resolve => {
            resolve(events);
        });
    }
}
