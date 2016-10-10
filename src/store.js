import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import identity from 'lodash/identity';
import { routerReducer } from 'react-router-redux'


import accounts from './account/reducers';
import policies from './policy/reducers';
import auth from './auth/reducers';
import config from './config/reducers';
import events from './timeline/reducers';
import agent from './agent/reducers';
import { LOGOUT_REQUEST, INIT_FROM_LOCAL_STORAGE } from './constants';
import { recordingMiddleware as bugReporterMiddleware } from './bug-reporter/history';


const initialState = {
    auth: {
        isAuthenticated: false,
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
    agent,
    routing: routerReducer
});

// Root reducer that can affect all state at once. Useful for logout to clear all state.
const rootReducer = (state, action) => {
    switch (action.type) {
        case LOGOUT_REQUEST:
            const initialStateWithConfig = initialState;
            initialStateWithConfig.config = state.config;
            return Object.assign({}, state, initialStateWithConfig); // Return the initial state

        case INIT_FROM_LOCAL_STORAGE:
            return Object.assign({}, state, {
                auth: {
                    isAuthenticated: true,
                    bearerToken: action.bearerToken,
                    activeCustomerId: action.activeCustomerId
                }
            });
    }

    return reducer(state, action);
};


// middleware for these redux devtools (if present): https://github.com/zalmoxisus/redux-devtools-extension
const getDevToolsExtension = () => {
    if (typeof window === 'undefined') {
        return identity;
    }

    const tools = window.devToolsExtension;

    return tools ? tools() : identity;
};


const configureStore = (preloadedState = initialState) => {
    return createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunkMiddleware, bugReporterMiddleware),
            getDevToolsExtension()
        )
    )
};

export default configureStore;

