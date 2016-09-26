import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import { requestLogin } from './actions';

export class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <button type="button" onClick={this.handleLoginClick}>Login</button>
            </div>
        )
    }

    handleLoginClick(e) {
        e.preventDefault();
        this.props.dispatch(requestLogin({username: "kyle", password: "password"}));
    }
}

function mapStateToProps(state) {
    return state.auth;
}

LoginComponent = connect(mapStateToProps)(LoginComponent);
