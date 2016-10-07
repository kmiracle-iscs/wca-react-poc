import { AGENT_REQUEST, AGENT_RESPONSE, AGENT_FAILURE } from '../constants';

const reduceAgent = (state = {}, action) => {
    switch(action.type) {
        case AGENT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case AGENT_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                displayLabel: action.agent.displayLabel,
                agentNumber: action.agent.agentNumber,
                contacts: action.agent.contacts,
                contactAddress: action.agent.contactAddress
            });

        default:
            return state;
    }
};

export default reduceAgent;
