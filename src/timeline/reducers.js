import { TIMELINE_EVENTS_REQUEST, TIMELINE_EVENTS_RESPONSE, TIMELINE_EVENTS_FAILURE } from '../constants';

export default function reduceTimeline(state = {}, action) {
    switch (action.type) {
        case TIMELINE_EVENTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
            // return state;

        case TIMELINE_EVENTS_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.events
            });
            // return action.events;

        default:
            return state
    }
}
