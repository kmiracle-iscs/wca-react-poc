import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../app';
import { browserHistory } from 'react-router'
import { hasSavedSession } from '../auth-service';
import { initFromLocalStorage } from '../../actions';
import { getConfig } from '../../config/actions';



export default function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps() {
            this.checkAuth();
        }

        checkAuth() {
            if (!this.props.isAuthenticated) {
                if (hasSavedSession()) {
                    this.props.initFromLocalStorage();
                    this.props.getConfig();
                } else {
                    browserHistory.push('/login');
                }
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated && !this.props.isFetching
                        ? <Component {...this.props} />
                        : null
                    }
                </div>
            )
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            initFromLocalStorage: () => {dispatch(initFromLocalStorage())},
            getConfig: () => {dispatch(getConfig())}
        }
    };

    const mapStateToProps = (state) => ({
        bearerToken: state.auth.bearerToken,
        isAuthenticated: state.auth.isAuthenticated,
        isFetching: state.config.isFetching
    });

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}
