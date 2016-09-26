import React from 'react';
import { Link } from 'react-router'

export class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-faded">
                <div className="nav navbar-nav">
                    <Link to={`/dashboard`} className="nav-item nav-link active">Dashboard</Link>
                    <Link to={`/logout`} className="nav-item nav-link active">Logout</Link>
                </div>
            </nav>
        )
    }
}
