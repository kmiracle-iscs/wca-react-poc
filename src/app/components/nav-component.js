import React from 'react';
import { Link } from 'react-router'


import styles from '../../index.css';
import T from '../../config/translate';


export class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={`navbar navbar-fixed-top navbar-dark bg-inverse ${styles.bgInverse}`}>
                <div className={`container ${styles.container}`}>
                <a className="navbar-brand">Innovative Insurance Co.</a>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link to={`/dashboard`} className="nav-item nav-link active">
                            <T path="nav.home"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/support`} className="nav-item nav-link active">
                            <T path="nav.support"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/profile`} className="nav-item nav-link active">
                            <T path="nav.profile"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/logout`} className="nav-item nav-link active">
                            <T path="nav.logout"/>
                        </Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}
