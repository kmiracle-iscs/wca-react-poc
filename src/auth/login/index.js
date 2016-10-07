import React from 'react';
import { connect } from 'react-redux';


import { login } from './../actions';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    <h2>Login</h2>
                    <input type="text" name="username" className="form-control m-t-2" value={this.state.username} onChange={this.handleChange.bind(this)} />
                    <input type="password" name="password" className="form-control m-t-1" value={this.state.password} onChange={this.handleChange.bind(this)} />
                    <button type="button" className="btn btn-primary m-t-1" onClick={this.handleLoginClick}>Login</button>
                </form>
            </div>
        )
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleLoginClick(e) {
        e.preventDefault();
        this.props.login(this.state);
    }
}

Login.propTypes = {
    login: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {dispatch(login(user))}
    }
};

const mapStateToProps = (state) => {
    return state.auth;
};

Login = connect(mapStateToProps, mapDispatchToProps)(Login);
