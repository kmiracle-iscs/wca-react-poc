import React from 'react';
import { connect } from 'react-redux'
import { AccountItemComponent } from '../account-item'

export class AccountListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Accounts</h1>
                {this.props.accounts.map(account => {
                    return <AccountItemComponent key={account.id} account={account} />
                })}
            </div>
        )
    }
}

AccountListComponent.propTypes = {
    accounts: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const { accounts } = state;
    return {
        accounts
    }
}

AccountListComponent = connect(mapStateToProps)(AccountListComponent);
