import React from 'react';
import { connect } from 'react-redux'
import { AccountItem } from '../account-item'
import { getAccounts } from '../actions';


export class AccountList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAccounts();
    }

    render() {
        return (
            <div className="m-t-3">
                <h4>Accounts</h4>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Account Number</th>
                            <th>Due Date</th>
                            <th>Balance</th>
                            <th>Due</th>
                        </tr>
                    {this.props.accounts.map(account => {
                        return (<tr key={account.id}>
                            <td>{account.accountNumber}</td>
                            <td>{account.dueDt}</td>
                            <td>{account.accountBalanceAmt}</td>
                            <td>{account.currentDueAmt}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

AccountList.propTypes = {
    accounts: React.PropTypes.array.isRequired,
    getAccounts: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        getAccounts: () => {dispatch(getAccounts())}
    }
}

function mapStateToProps(state) {
    return { accounts: state.accounts };
}

AccountList = connect(mapStateToProps, mapDispatchToProps)(AccountList);
