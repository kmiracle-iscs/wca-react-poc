import { TIMELINE_EVENTS_REQUEST, TIMELINE_EVENTS_RESPONSE, TIMELINE_EVENTS_FAILURE } from '../constants';


const reduceTimeline = (state = {}, action) => {
    switch (action.type) {
        case TIMELINE_EVENTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case TIMELINE_EVENTS_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.events
            });

        default:
            return state
    }
};

export default reduceTimeline;
