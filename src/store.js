import { createStore } from 'redux';
import rootReducer from './reducers'

const initialState = {
    activeCustomer: "312",
    auth: {
        isLoggedIn: false,
        token: ""
    },
    policies: [
        {
            "id": "1",
            "policyNumber": "CA000273"
        },
        {
            "id": "2",
            "policyNumber": "CA000345"
        },
        {
            "id": "3",
            "policyNumber": "CA000887"
        }
    ],
    accounts: [
        {
            "id": "1",
            "accountNumber": "98685"
        },
        {
            "id": "2",
            "accountNumber": "252323"
        },
        {
            "id": "3",
            "accountNumber": "888733"
        }
    ]
};

export default function configureStore(preloadedState = initialState) {
    return createStore(
        rootReducer,
        preloadedState
    )
}

