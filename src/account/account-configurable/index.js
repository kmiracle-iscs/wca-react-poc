import React from 'react';


import configConnected from '../../config/config-connected';
import { AccountList } from '../../account/account-list';


// Based on config that comes from parent class, determines which Account feature component to show
class AccountConfigurable extends React.Component {
    render() {
        if (this.props.features.AccountList) {
            return (
                <AccountList />
            )
        } else {
            return (<div>AccountList is disabled</div>)
        }
    }
}

export default configConnected(AccountConfigurable);
