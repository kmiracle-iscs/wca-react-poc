import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment';

// import { getTimelineEvents } from '../actions';
import { TimelineHeader } from '../header';

const events = [
    {
        type: 'Auto',
        id: '1',
        policyNumber: 'CAA000008',
        date: moment().format('ll'),
        detail: '$631.08',
        action: 'Payment Received'
    },
    {
        type: 'Home',
        id: '2',
        policyNumber: 'HO0000343',
        date: moment().format('ll'),
        detail: '$7.77',
        action: 'Payment Received'
    },
    {
        type: 'Auto',
        id: '3',
        policyNumber: 'CAA000008',
        date: moment().format('ll'),
        detail: 'Explosion',
        action: 'Claim Reported'
    },
    {
        type: 'Auto',
        id: '4',
        policyNumber: 'CAA00000264',
        date: moment().format('ll'),
        detail: '$631.08',
        action: 'Payment Denied'
    }
];


export class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentWillMount() {
    //     this.props.getTimelineEvents();
    // }

    render() {
        return (
            <div>
                <TimelineHeader />
                <h4>Recent Activity</h4>
                <table className="table">
                    <tbody>
                    {events.map(event => {
                        return (<tr key={event.id}>
                            <td>{event.type}</td>
                            <td>{event.policyNumber}</td>
                            <td>{event.date}</td>
                            <td>{event.detail}</td>
                            <td>{event.action}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

// Timeline.propTypes = {
//     events: React.PropTypes.array.isRequired,
//     getTimelineEvents: React.PropTypes.func.isRequired
// };
//
// function mapDispatchToProps(dispatch) {
//     return {
//         getTimelineEvents: () => {dispatch(getTimelineEvents())}
//     }
// }
//
// function mapStateToProps(state) {
//     return { events: state.events };
// }
//
// Timeline = connect(mapStateToProps, mapDispatchToProps)(Timeline);
