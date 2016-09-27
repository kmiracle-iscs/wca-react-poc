import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import React from 'react';

// App
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
                <div className="m-t-2">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    auth: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { auth } = state;
    return {
        auth
    }
}

App = connect(mapStateToProps)(App);
