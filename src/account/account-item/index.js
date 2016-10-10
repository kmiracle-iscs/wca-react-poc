import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'


import { getAccounts } from '../actions';
import './styles.post.css';


const Balances = ({account}) =>
    <table className="table">
        <tbody>
        <tr>
            <th>Payoff Amount</th>
            <th>Current Due</th>
            <th>Due Date</th>
            <th></th>
        </tr>
        <tr>
            <td>
                {account.accountBalanceAmt}
            </td>
            <td>{account.currentDueAmt}</td>
            <td>{account.dueDt}</td>
            <td><button className="btn btn-success">Pay Now</button></td>
        </tr>
        </tbody>
    </table>;


const RecentPayments = ({account}) =>
    <table className="table">
        <tbody>
        <tr>
            <th>Payment Id</th>
            <th>Receipt Date</th>
            <th>Amount</th>
            <th>Status</th>
        </tr>
        {account.recent.payments.map((payment, index) => {
            return (
                <tr key={JSON.stringify(payment) + index}>
                    <td>
                        {payment.id}
                    </td>
                    <td>{payment.receiptDt}</td>
                    <td>{payment.receiptAmt}</td>
                    <td>{payment.status}</td>
                </tr>
            )
        })}
        </tbody>
    </table>;


export class AccountItem extends React.Component {

    componentWillMount() {
        if (_.isEmpty(this.props.account)) {
            this.props.getAccounts();
        }
    }

    render() {
        if (this.props.isFetching || _.isEmpty(this.props.account)) {
            return <div></div>;
        } else {
            return (
                <div className="account-item__panel">
                    <div className="row">
                        <div className="col col-lg-12">
                            <h3>{this.props.account.accountNumber}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-12">
                            <Balances account={this.props.account}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-lg-12">
                            <RecentPayments account={this.props.account}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

AccountItem.propTypes = {
    account: React.PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAccounts: () => {dispatch(getAccounts())}
    }
};

const mapStateToProps = (state, ownProps) => ({
    isFetching: state.accounts.isFetching,
    account: _.find(state.accounts.items, ['id', ownProps.params.id]) || {}
});

AccountItem = connect(mapStateToProps, mapDispatchToProps)(AccountItem);
