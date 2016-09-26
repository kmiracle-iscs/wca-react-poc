import React from 'react';


import { NavComponent } from './nav-component';

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
                        <h2>Dashboard</h2>
                    </div>
                </div>

            </div>
        )
    }
}
