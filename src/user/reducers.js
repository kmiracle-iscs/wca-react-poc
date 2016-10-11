import { USER_REQUEST, USER_RESPONSE, USER_FAILURE } from '../constants';

const reduceUser = (state = {}, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });

        case USER_RESPONSE:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.user
            });

        default:
            return state
    }
};

export default reduceUser;
