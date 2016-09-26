import React from 'react';
import { connect } from 'react-redux'
import { AccountItem } from '../account-item'

export class AccountList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Accounts</h1>
                {this.props.accounts.map(account => {
                    return <AccountItem key={account.id} account={account} />
                })}
            </div>
        )
    }
}

AccountList.propTypes = {
    accounts: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const { accounts } = state;
    return {
        accounts
    }
}

AccountList = connect(mapStateToProps)(AccountList);
