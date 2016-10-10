import 'babel-polyfill';
import { CLAIMS_REQUEST, CLAIMS_RESPONSE, CLAIMS_FAILURE } from '../constants';
import ClaimService from './claim-service';


export const claimsRequest = () => {
    return {
        type: CLAIMS_REQUEST
    }
};

export const claimsResponse = (claims) => {
    return {
        type: CLAIMS_RESPONSE,
        claims
    }
};

export const claimsFailure = () => {
    return {
        type: CLAIMS_FAILURE
    }
};

export const getClaims = () => dispatch => {
    dispatch(claimsRequest());

    const claimService = new ClaimService();

    return claimService.getClaims()
        .then(json => {
            dispatch(claimsResponse(json.result.DTOClaim));
        })
        .catch(error => {
            dispatch(claimsFailure())
        });
};
