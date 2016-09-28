import { AGENT_REQUEST, AGENT_RESPONSE, AGENT_FAILURE } from '../constants';

export default function reduceAgent(state = [], action) {
    switch(action.type) {
        case AGENT_REQUEST:
            return state;
        case AGENT_RESPONSE:
            return action.agent;
        default:
            return state;
    }
}