import { AGENT_REQUEST, AGENT_RESPONSE, AGENT_FAILURE } from '../constants';

export default function reduceAgent(state = {}, action) {
    switch(action.type) {
        case AGENT_REQUEST:
            return state;

        case AGENT_RESPONSE:
            return Object.assign({}, state, {
                displayLabel: action.agent.displayLabel,
                agentNumber: action.agent.agentNumber,
                contacts: action.agent.contacts,
                contactAddress: action.agent.contactAddress
            });

        default:
            return state;
    }
}