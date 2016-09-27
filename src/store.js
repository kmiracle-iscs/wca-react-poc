import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'

const initialState = {
    auth: {
        isLoggedIn: false,
        bearerToken: undefined,
        activeCustomerId: undefined
    },
    policies: [],
    accounts: []
};

export default function configureStore(preloadedState = initialState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware),
    )
}

