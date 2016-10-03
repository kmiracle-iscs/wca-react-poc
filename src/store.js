import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux';


import accounts from './account/reducers';
import policies from './policy/reducers';
import auth from './auth/reducers';
import config from './config/reducers';
import events from './timeline/reducers';
import agent from './agent/reducers';
import { LOGOUT_REQUEST, INIT_FROM_LOCAL_STORAGE } from './constants';

const initialState = {
    auth: {
        isLoggedIn: false,
        bearerToken: null,
        activeCustomerId: null
    },
    config: {
        isFetching: false,
        features: {},
        language: "",
        translations: {}
    },
    policies: {
        isFetching: false,
        items: []
    },
    accounts: {
        isFetching: false,
        items: []
    },
    events: {
        isFetching: false,
        items: []
    },
    agent: {
        isFetching: false,
        contactAddress: {},
        contacts: []
    }
};

// Combine individual reducers for each part of the store.
const reducer = combineReducers({
    accounts,
    config,
    policies,
    auth,
    events,
    agent
});


// Root reducer that can affect all state at once. Useful for logout to clear all state.
const rootReducer = (state, action) => {
    switch (action.type) {
        case LOGOUT_REQUEST:
            return Object.assign({}, state, initialState); // Return the initial state

        case INIT_FROM_LOCAL_STORAGE:
            return Object.assign({}, state, {
                auth: {
                    isLoggedIn: true,
                    bearerToken: action.bearerToken,
                    activeCustomerId: action.activeCustomerId
                }
            });
    }

    return reducer(state, action);
};


export default function configureStore(preloadedState = initialState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware),
    )
}

