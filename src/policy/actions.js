import 'babel-polyfill';
import { POLICIES_REQUEST, POLICIES_RESPONSE, POLICIES_FAILURE } from '../constants';
import PolicyService from './policy-service';

export const policiesRequest = () => {
    return {
        type: POLICIES_REQUEST
    }
};

export const policiesResponse = (policies) => {
    return {
        type: POLICIES_RESPONSE,
        policies
    }
};

export const policiesFailure = () => {
    return {
        type: POLICIES_FAILURE
    }
};

export const getPolicies = () => dispatch => {
    dispatch(policiesRequest());

    const policyService = new PolicyService();

    return policyService.getPolicies()
        .then(json => {
            dispatch(policiesResponse(json));
        })
        .catch(error => {
            dispatch(policiesFailure())
        });
};
