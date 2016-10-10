import React from 'react';
import { Link } from 'react-router'


import './side-nav.post.css';
import T from '../../config/translate';


export class SideNav extends React.Component {

    render() {
        return (
            <div className="side-nav">
                <ul className="side-nav__links-wrapper" style={{listStyle: 'none'}}>
                    <li className="side-nav__link">
                        <Link to={`/payments`} className="nav-item nav-link active">
                            <T path="nav.payments"/>
                        </Link>
                    </li>
                    <li className="side-nav__link">
                        <Link to={`/claims`} className="nav-item nav-link active">
                            <T path="nav.claims"/>
                        </Link>
                    </li>
                    <li className="side-nav__link">
                        <Link to={`/coverages`} className="nav-item nav-link active">
                            <T path="nav.coverages"/>
                        </Link>
                    </li>
                    <li className="side-nav__link">
                        <Link to={`/docs`} className="nav-item nav-link active">
                            <T path="nav.docs"/>
                        </Link>
                    </li>
                    <li className="side-nav__link">
                        <Link to={`/docs`} className="nav-item nav-link active">
                            <T path="nav.claimStatus"/>
                        </Link>
                    </li>
                    <li className="side-nav__link">
                        <Link to={`/docs`} className="nav-item nav-link active">
                            <T path="nav.changeCoverage"/>
                        </Link>
                    </li>
                    <li className="side-nav__link">
                        <Link to={`/docs`} className="nav-item nav-link active">
                            <T path="nav.outstandingChangeRequests"/>
                        </Link>
                    </li>
                    <li className="side-nav__link">
                        <Link to={`/docs`} className="nav-item nav-link active">
                            <T path="nav.buyInsurance"/>
                        </Link>
                    </li>
                    <li className="side-nav__link">
                        <Link to={`/docs`} className="nav-item nav-link active">
                            <T path="nav.support"/>
                        </Link>
                    </li>
                    <li className="side-nav__link">
                        <Link to={`/docs`} className="nav-item nav-link active">
                            <T path="nav.contact"/>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
