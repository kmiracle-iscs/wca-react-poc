import { App } from './app'
import { Login} from './auth/login'
import { Dashboard } from './app/components/dashboard-component'
import { AccountItem } from './account/account-item';
import { loggedIn, logout, hasSavedSession } from './auth/auth-service';
import { store } from './app';
import { initFromLocalStorage } from './actions';
import { getConfig } from './config/actions';
import { hasConfig } from './config/config-service';


const requireAuth = (nextState, replace, callback) => {
    if (!loggedIn()) {
        if (hasSavedSession()) {
            store.dispatch(initFromLocalStorage());
            store.dispatch(getConfig()).then(() => {
                callback();
            });

        } else {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            });
            callback();
        }
    } else {
        callback();
    }
};

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
            onEnter: (nextState, replace, callback) => {
                
                // this is not good. need to make this cleaner.
                if (loggedIn()) {
                    replace({
                        pathname: '/dashboard'
                    });
                    callback();
                } else if (hasSavedSession()) {
                    replace({
                        pathname: '/dashboard'
                    });
                    store.dispatch(initFromLocalStorage());
                    store.dispatch(getConfig()).then(() => {
                        callback();
                    });
                } else if (!hasConfig()) {
                    store.dispatch(getConfig()).then(() => {
                        callback();
                    })
                } else {
                    callback();
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
