import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';


import { getAccounts } from '../actions';
import T from '../../config/translate';


export class AccountList extends React.Component {

    componentWillMount() {
        this.props.getAccounts();
    }

    render() {
        return (
            <div className="m-t-3">
                <h4><T path="account.header" /> {this.props.isFetching && <img src="ajax-loader.gif" />}</h4>
                <table className="table">
                    <tbody>
                        <tr>
                            <th><T path="account.number"/></th>
                            <th><T path="account.dueDt" /></th>
                            <th><T path="account.balance" /></th>
                            <th><T path="account.due"/></th>
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

const mapDispatchToProps = (dispatch) => {
    return {
        getAccounts: () => {dispatch(getAccounts())}
    }
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.accounts.isFetching,
        accounts: state.accounts.items
    };
};

AccountList = connect(mapStateToProps, mapDispatchToProps)(AccountList);
