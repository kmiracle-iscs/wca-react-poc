import React from 'react';
import { Link } from 'react-router'

export class DashboardComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row m-t-3">
                <div className="col col-lg-12">
                    <h2>Dashboard</h2>
                </div>
            </div>
        )
    }
}
