import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import React from 'react';

// App
import { NavComponent } from './components/nav-component';
import { DashboardComponent } from './components/dashboard-component';
import { requestCustomer } from '../actions';
import configureStore from '../store';

export const store = configureStore();

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch;
    }

    componentDidMount() {
        store.dispatch(requestCustomer("315"));
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <div>
                <NavComponent />
                <div className="m-t-2">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    activeCustomer: React.PropTypes.string.isRequired,
    auth: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { activeCustomer, auth } = state;
    return {
        activeCustomer,
        auth
    }
}

App = connect(mapStateToProps)(App);
