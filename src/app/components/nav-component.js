import React from 'react';
import { Link } from 'react-router'

export class NavComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-faded">
                <div className="nav navbar-nav">
                    <Link to={`/dashboard`} className="nav-item nav-link active">Dashboard</Link>
                    <Link to={`/policies`} className="nav-item nav-link active">Policies</Link>
                    <Link to={`/accounts`} className="nav-item nav-link active">Accounts</Link>
                    <Link to={`/login`} className="nav-item nav-link active">Login</Link>
                </div>
            </nav>
        )
    }
}
