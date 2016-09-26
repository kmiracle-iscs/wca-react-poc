import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, hashHistory } from 'react-router'

import { routes } from './routes'
import { store } from './app'

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>
        </Router>
    </Provider>,
    document.querySelector("#app")
);
