import React from 'react';


import { Nav } from './nav-component';
import { PolicyList } from '../../policy/policy-list';
import { AccountList } from '../../account/account-list';
import { Timeline } from '../../timeline/body';


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="row m-t-3">
                    <div className="col col-lg-12">
                        <Timeline />
                        <AccountList />
                        <PolicyList />
                    </div>

                </div>

            </div>
        )
    }
}
