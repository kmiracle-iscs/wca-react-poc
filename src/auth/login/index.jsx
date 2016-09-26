import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import { requestLogin } from './actions';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    render() {
        return (
            <div>
                <form>
                    <h2>Login</h2>
                    <input type="text" className="form-control" />
                    <input type="password" className="form-control" />
                    <button type="button" className="btn btn-primary" onClick={this.handleLoginClick}>Login</button>
                </form>
            </div>
        )
    }

    handleLoginClick(e) {
        e.preventDefault();
        console.log("****** logging in");
        this.props.dispatch(requestLogin({username: "kyle", password: "password"}));
    }
}

function mapStateToProps(state) {
    return state.auth;
}

Login = connect(mapStateToProps)(Login);
