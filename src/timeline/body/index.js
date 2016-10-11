import React from 'react';
import { connect } from 'react-redux'
import moment from 'moment';

import { getTimelineEvents } from '../actions';
import TimelineHeader from '../header';
import T from '../../config/translate';
import { getUser } from '../../user/actions';


export class Timeline extends React.Component {

    componentWillMount() {
        this.props.getTimelineEvents();
        this.props.getUser();
    }

    render() {
        return (
            <div>
                <TimelineHeader user={this.props.user} isFetching={this.props.isFetchingUser}/>
                <h4><T path="timeline.recentActivity"/></h4>
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
    isFetchingEvents: React.PropTypes.bool.isRequired,
    isFetchingUser: React.PropTypes.bool.isRequired,
    getTimelineEvents: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTimelineEvents: () => {dispatch(getTimelineEvents())},
        getUser: () => {dispatch(getUser())}
    }
};

const mapStateToProps = (state) => {
    return {
        isFetchingEvents: state.events.isFetching,
        isFetchingUser: state.user.isFetching,
        events: state.events.items,
        user: state.user.data
    };
};

Timeline = connect(mapStateToProps, mapDispatchToProps)(Timeline);
