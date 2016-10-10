import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router'


import { routes } from './routes'
import { store, history } from './app'


render(
    <Provider store={store}>
        <Router history={history} routes={routes}>
        </Router>
    </Provider>,
    document.querySelector("#app")
);
