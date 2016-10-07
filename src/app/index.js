import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import React from 'react';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


import configureStore from '../store';

export const store = configureStore();
export const history = syncHistoryWithStore(browserHistory, store);

export class App extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    auth: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

App = connect(mapStateToProps)(App);
