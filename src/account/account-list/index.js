import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';


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
                <h4>Accounts {this.props.isFetching && <img src="ajax-loader.gif" />}</h4>
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
                            <td>
                                <Link to={`/account/${account.accountNumber}`} className="nav-item nav-link active">{account.accountNumber}</Link>
                            </td>
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
    isFetching: React.PropTypes.bool.isRequired,
    accounts: React.PropTypes.array.isRequired,
    getAccounts: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        getAccounts: () => {dispatch(getAccounts())}
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.accounts.isFetching,
        accounts: state.accounts.items
    };
}

AccountList = connect(mapStateToProps, mapDispatchToProps)(AccountList);
