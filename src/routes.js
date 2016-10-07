import { App } from './app';
import { Login} from './auth/login';
import { MainLayout } from './app/components/main-layout';
import { Dashboard } from './app/components/dashboard-component';
import { AccountItem } from './account/account-item';
import { store } from './app';
import { getConfig } from './config/actions';
import { hasConfig } from './config/config-service';
import { logout } from './auth/auth-service';
import requireAuth from './auth/authenticated-component';



export const routes = {
    path: '/',
    component: App,
    indexRoute: {
        component: requireAuth(Dashboard)
    },
    childRoutes: [
        {
            component: requireAuth(MainLayout),
            childRoutes: [
                {
                    path: '/dashboard',
                    component: requireAuth(Dashboard)
                },
                {
                    path: '/account/:id',
                    component: requireAuth(AccountItem)
                }
            ]
        },
        {
            path: '/login',
            component: Login,
            onEnter: (nextState, replace, callback) => {
                if (!hasConfig()) {
                    store.dispatch(getConfig()).then(() => {
                        callback();
                    })
                } else {
                    callback();
                }
            }
        },
        {
            path: '/logout',
            onEnter: (nextState, replace) => {
                logout();

                replace({
                    pathname: '/login'
                });
            }
        }

    ]
};
