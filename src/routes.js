import { App } from './app'
import { Login} from './auth/login'
import { Dashboard } from './app/components/dashboard-component'
import { AccountItem } from './account/account-item';
import { loggedIn, logout, hasSavedSession } from './auth/auth-service';
import { store } from './app';
import { initFromLocalStorage } from './actions';


function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        if (hasSavedSession()) {
            store.dispatch(initFromLocalStorage());
        } else {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            });
        }
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
            path: 'account/:id',
            component: AccountItem,
            onEnter: requireAuth
        },
        {
            path: 'policy/:policyId',
            onEnter: requireAuth
        },
        {
            path: 'login',
            component: Login,
            onEnter: (nextState, replace) => {
                // go to dashboard if we're already logged in
                if (loggedIn()) {
                    replace({
                        pathname: '/dashboard'
                    });
                }
            }
        },
        {
            path: 'logout',
            onEnter: (nextState, replace) => {
                logout();

                replace({
                    pathname: '/login'
                });
            }
        }
    ]
};
