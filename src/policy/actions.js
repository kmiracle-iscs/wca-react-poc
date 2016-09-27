import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import { POLICIES_REQUEST, POLICIES_RESPONSE, POLICIES_FAILURE } from '../constants';
import PolicyService from './policy-service';

export function policiesRequest() {
    return {
        type: POLICIES_REQUEST
    }
}

export function policiesResponse(policies) {
    return {
        type: POLICIES_RESPONSE,
        policies
    }
}

export function policiesFailure() {
    return {
        type: POLICIES_FAILURE
    }
}

export function getPolicies(user) {
    return function (dispatch) {
        dispatch(policiesRequest());

        const policyService = new PolicyService();

        return policyService.getPolicies()
            .then(json => {
                dispatch(policiesResponse(json));
            })
            .catch(error => {
                dispatch(policiesFailure())
            });
    }
}
