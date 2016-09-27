import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux';


import accounts from './account/reducers';
import policies from './policy/reducers';
import auth from './auth/login/reducers';
import events from './timeline/reducers';

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


const reducer = combineReducers({
    accounts,
    policies,
    auth,
    events
});



export default function configureStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        applyMiddleware(thunkMiddleware),
    )
}

