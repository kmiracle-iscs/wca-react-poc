import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../index.css';
import { connect } from 'react-redux';
import React from 'react';

// App
import configureStore from '../store';
import { SideNav } from './components/side-nav';
import { loggedIn } from '../auth/auth-service';

export const store = configureStore();

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.dispatch = props.dispatch;
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <div>
            {loggedIn() ? (
                    <div className="m-t-2">
                        <div className="col-lg-3 m-t-3 p-r-3 p-l-0">
                            <SideNav />
                        </div>
                        <div className={`col-lg-9 p-l-3 m-t-3`}>
                            {this.props.children}
                        </div>
                    </div>) : (
                    <div className="col-lg-12 m-t-3">
                        {this.props.children}
                    </div>
            )}
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
