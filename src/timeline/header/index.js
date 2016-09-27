import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment';

import styles from '../../index.css';


export class TimelineHeader extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const cssClasses = `col-md-5 ${styles.noPadding}`;

        return (
            <div className={`row m-b-3 ${styles.noMargin}`}>
                <div className={cssClasses}>
                    <span><strong>Welcome, Doug Moore</strong></span>
                    <p>Status: Active | Accounts: Auto, Homeowners</p>
                </div>
                <div className="col-md-4">
                    <span>Next Payment due in 4 Days</span>
                    <p><strong>($777.15)</strong></p>
                </div>
                <div className="col-md-3">
                    <span>Your Balance</span>
                    <p><strong>$1,183.78</strong></p>
                </div>
            </div>
        )
    }
}
