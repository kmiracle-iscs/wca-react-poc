import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment';

import { getTimelineEvents } from '../actions';
import { TimelineHeader } from '../header';

export class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getTimelineEvents();
    }

    render() {
        return (
            <div>
                <TimelineHeader />
                <h4>Recent Activity</h4>
                <table className="table">
                    <tbody>
                    {this.props.events.map(event => {
                        return (<tr key={event.id}>
                            <td>{event.type}</td>
                            <td><a href="">{event.policyNumber}</a></td>
                            <td>{event.date}</td>
                            <td>{event.detail}</td>
                            <td className={event.status==='success' ? 'text-success' : 'text-danger'}>
                                {event.action}
                            </td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

Timeline.propTypes = {
    events: React.PropTypes.array.isRequired,
    isFetching: React.PropTypes.bool.isRequired,
    getTimelineEvents: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        getTimelineEvents: () => {dispatch(getTimelineEvents())}
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.events.isFetching,
        events: state.events.items
    };
}

Timeline = connect(mapStateToProps, mapDispatchToProps)(Timeline);
