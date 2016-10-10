import React from 'react';


import { PolicyList } from '../../policy/policy-list';
import AccountConfigurable from '../../account/account-configurable';
import { Timeline } from '../../timeline/body';
import './dashboard.post.css';


export class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <div className="dashboard row">
                    <div className="dashboard__panel col col-lg-12">
                        <Timeline />
                        <AccountConfigurable />
                        <PolicyList />
                    </div>
                </div>
            </div>
        )
    }
}
