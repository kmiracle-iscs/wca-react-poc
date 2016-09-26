import { App } from './app'
import { Login} from './auth/login'
import { Dashboard } from './app/components/dashboard-component'


function loggedIn() {
    return true;
}

function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

export const routes = {
    path: '/',
    component: App,
    indexRoute: {
        component: Dashboard,
        onEnter: requireAuth
    },
    childRoutes: [
        {
            path: 'dashboard',
            component: Dashboard,
            onEnter: requireAuth
        },
        {
            path: 'login',
            component: Login
        },
        {
            path: 'logout',
            onEnter: (nextState, replace) => {
                replace({
                    pathname: '/login'
                });
            }
        }
    ]
};
