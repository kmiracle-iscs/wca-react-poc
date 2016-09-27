import React from 'react';


import { Nav } from './nav-component';
import { PolicyList } from '../../policy/policy-list';
import { AccountList } from '../../account/account-list';
import { Timeline } from '../../timeline/body';
import styles from '../../index.css';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="row">
                    <div className={`col col-lg-12 ${styles.panel}`}>
                        <Timeline />
                        <AccountList />
                        <PolicyList />
                    </div>

                </div>

            </div>
        )
    }
}
