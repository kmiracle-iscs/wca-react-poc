import React from 'react';
import { Link } from 'react-router'

export class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
                <a className="navbar-brand">Innovative Insurance Co.</a>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link to={`/dashboard`} className="nav-item nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/support`} className="nav-item nav-link active">Support</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/profile`} className="nav-item nav-link active">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/logout`} className="nav-item nav-link active">Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
