import React from 'react';
import { connect } from 'react-redux'

import styles from '../../index.css';
import T from '../../config/translate';


export default class TimelineHeader extends React.Component {

    render() {
        const cssClasses = `col-md-5 ${styles.noPadding}`;

        return (
            <div className={`row m-b-3 ${styles.noMargin}`}>
                <div className={cssClasses}>
                    <span>
                        <strong>
                            <T path="timeline.welcome"/>, {this.props.isFetching && <img src="ajax-loader.gif" />} {this.props.user.firstName} {this.props.user.lastName}
                        </strong>
                    </span>
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

TimelineHeader.propTypes = {
    user: React.PropTypes.object.isRequired,
    isFetching: React.PropTypes.bool.isRequired
};
