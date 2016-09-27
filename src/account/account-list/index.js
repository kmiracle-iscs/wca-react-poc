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
            <div>
                <h3>Accounts</h3>
                <table className="table">
                    <tbody>
                    {this.props.accounts.map(account => {
                        return (<tr key={account.id}>
                            <td>{account.id}</td>
                            <td>{account.accountNumber}</td>
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
