import { REQUEST_LOGIN } from '../../constants';

export function requestLogin(creds) {
    return {
        type: REQUEST_LOGIN,
        creds
    }
}
