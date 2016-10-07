import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'


import { getAccounts } from '../actions';
import styles from '../../index.css';


export class AccountItem extends React.Component {

    componentWillMount() {
        if (_.isEmpty(this.props.account)) {
            this.props.getAccounts();
        }
    }

    render() {
        return (
            <div className={styles.panel}>
                <div className="row">
                    <div className={`col col-lg-12`}>
                        <h3>{this.props.account.accountNumber}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-12">
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
                                    {this.props.account.accountBalanceAmt}
                                </td>
                                <td>{this.props.account.currentDueAmt}</td>
                                <td>{this.props.account.dueDt}</td>
                                <td><button className="btn btn-success">Pay Now</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-lg-12">
                        <table className="table">
                            <tbody>
                            <tr>
                                <th>Payment Id</th>
                                <th>Receipt Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                            {this.props.account.recent.payments.map((payment, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {payment.id}
                                        </td>
                                        <td>{payment.receiptDt}</td>
                                        <td></td>
                                        <td>{payment.status}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
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
    account: _.find(state.accounts.items, ['id', ownProps.params.id]) || {}
});

AccountItem = connect(mapStateToProps, mapDispatchToProps)(AccountItem);
