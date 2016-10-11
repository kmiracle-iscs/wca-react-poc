import { USER_REQUEST, USER_RESPONSE, USER_FAILURE } from '../constants';
import UserService from './user-service';

export const userRequest = () => {
    return {
        type: USER_REQUEST
    }
};

export const userResponse = (user) => {
    return {
        type: USER_RESPONSE,
        user
    }
};

export const userFailure = () => {
    return {
        type: USER_FAILURE
    }
};

export const getUser = () => dispatch => {
    dispatch(userRequest());

    const userService = new UserService();

    return userService.getUser()
        .then(json => {
            dispatch(userResponse(json));
        })
        .catch(error => {
            dispatch(userFailure())
        });
};
