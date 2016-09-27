import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'

const initialState = {
    auth: {
        isLoggedIn: false,
        bearerToken: null,
        activeCustomerId: null
    },
    policies: [],
    accounts: [],
    events: []
};

export default function configureStore(preloadedState = initialState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware),
    )
}

