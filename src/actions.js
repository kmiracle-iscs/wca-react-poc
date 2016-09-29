import { INIT_FROM_LOCAL_STORAGE } from './constants';


function initRequest(bearerToken, activeCustomerId) {
    return {
        type: INIT_FROM_LOCAL_STORAGE,
        bearerToken,
        activeCustomerId
    }
}

export function initFromLocalStorage() {
    return function (dispatch) {
        const { activeCustomerId, bearerToken } = JSON.parse(localStorage.getItem('iscs-wca-react-poc'));
        return dispatch(initRequest(bearerToken, activeCustomerId));
    }
}
