import 'babel-polyfill';
import { TIMELINE_EVENTS_REQUEST, TIMELINE_EVENTS_RESPONSE, TIMELINE_EVENTS_FAILURE } from '../constants';
import ActivityService from './activity-service';


export const timelineEventsRequest = () => {
    return {
        type: TIMELINE_EVENTS_REQUEST
    }
};

export const timelineEventsResponse = (events) => {
    return {
        type: TIMELINE_EVENTS_RESPONSE,
        events
    }
};

export const timelineEventsFailure = () => {
    return {
        type: TIMELINE_EVENTS_FAILURE
    }
};

export const getTimelineEvents = () => dispatch => {
    dispatch(timelineEventsRequest());

    const activityService = new ActivityService();

    return activityService.getRecentEvents()
        .then(json => {
            dispatch(timelineEventsResponse(json));
        })
        .catch(error => {
            dispatch(timelineEventsFailure())
        });
};
