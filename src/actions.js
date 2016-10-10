import { INIT_FROM_LOCAL_STORAGE } from './constants';


const initRequest = (bearerToken, activeCustomerId) => {
    return {
        type: INIT_FROM_LOCAL_STORAGE,
        bearerToken,
        activeCustomerId
    }
};

export const initFromLocalStorage = () => dispatch => {
    const { activeCustomerId, bearerToken } = JSON.parse(localStorage.getItem('iscs-wca-react-poc'));
    return dispatch(initRequest(bearerToken, activeCustomerId));
};
