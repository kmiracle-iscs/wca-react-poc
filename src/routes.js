import { App } from './app'
import { LoginComponent } from './auth/login'
import { PolicyListComponent } from './policy/policy-list'
import { AccountListComponent } from './account/account-list'
import { DashboardComponent } from './app/components/dashboard-component'
//import { NoMatch } from './app/NoMatch'


export const routes = {
    path: '/',
    component: App,
    childRoutes: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'login', component: LoginComponent },
        { path: 'policies', component: PolicyListComponent },
        { path: 'accounts', component: AccountListComponent }
        //{ path: '*', component: NoMatch }
    ]
};
