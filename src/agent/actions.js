import 'babel-polyfill';
import { AGENT_REQUEST, AGENT_RESPONSE, AGENT_FAILURE } from '../constants';
import AgentService from './agent-service';

export function agentRequest() {
    return {
        type: AGENT_REQUEST
    }
}

export function agentResponse(agent) {
    return {
        type: AGENT_RESPONSE,
        agent
    }
}

export function agentFailure() {
    return {
        type: AGENT_FAILURE
    }
}

export function getAgent() {
    return function(dispatch) {
        dispatch(agentRequest());

        const agentService = new AgentService();

        return agentService.getAgent()
            .then(json => {
                dispatch(agentResponse(json));
            })
            .catch(error => {
                dispatch(agentFailure());
            })
    }
}