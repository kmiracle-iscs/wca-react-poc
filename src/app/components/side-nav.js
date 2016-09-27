import React from 'react';
import { Link } from 'react-router'


import styles from '../../index.css';

export class SideNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.sideNav}>
                <ul style={{listStyle: 'none'}}>
                    <li className="nav-item">
                        <Link to={`/payments`} className="nav-item nav-link active">Payments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/claims`} className="nav-item nav-link active">Claims</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/coverages`} className="nav-item nav-link active">Coverages</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/docs`} className="nav-item nav-link active">Documents & ID Cards</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/docs`} className="nav-item nav-link active">View Claim Status</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/docs`} className="nav-item nav-link active">Change Coverage</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/docs`} className="nav-item nav-link active">Outstanding Change Requests</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/docs`} className="nav-item nav-link active">Buy Insurance</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/docs`} className="nav-item nav-link active">Support</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/docs`} className="nav-item nav-link active">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
