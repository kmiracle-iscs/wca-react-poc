import 'babel-polyfill';
import { AGENT_REQUEST, AGENT_RESPONSE, AGENT_FAILURE } from '../constants';
import AgentService from './agent-service';


export const agentRequest = () => {
    return {
        type: AGENT_REQUEST
    }
};

export const agentResponse = (agent) => {
    return {
        type: AGENT_RESPONSE,
        agent
    }
};

export const agentFailure = () => {
    return {
        type: AGENT_FAILURE
    }
};

export const getAgent = () => dispatch => {
    dispatch(agentRequest());

    const agentService = new AgentService();

    return agentService.getAgent()
        .then(json => {
            dispatch(agentResponse(json));
        })
        .catch(error => {
            dispatch(agentFailure());
        });
};
