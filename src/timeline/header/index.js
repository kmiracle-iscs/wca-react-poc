import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment';


import T from '../../config/translate';


export class TimelineHeader extends React.Component {

    render() {
        return (
            <div className="u-no-margin row m-b-3">
                <div className="u-no-padding col-md-5">
                    <span><strong><T path="timeline.welcome"/>, Doug Moore</strong></span>
                    <p><T path="timeline.status"/>: <T path="timeline.active"/> | <T path="timeline.accounts"/>: Auto, Homeowners</p>
                </div>
                <div className="col-md-4">
                    <span><T path="timeline.nextPaymentDue"/></span>
                    <p><strong>($777.15)</strong></p>
                </div>
                <div className="col-md-3">
                    <span><T path="timeline.balance"/></span>
                    <p><strong>$1,183.78</strong></p>
                </div>
            </div>
        )
    }
}
