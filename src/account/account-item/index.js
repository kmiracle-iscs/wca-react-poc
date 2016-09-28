import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'


export class AccountItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>Account {this.props.account.accountNumber}</label>
            </div>
        )
    }
}

AccountItem.propTypes = {
    account: React.PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    account: _.find(state.accounts, ['id', ownProps.params.id])
});

AccountItem = connect(mapStateToProps)(AccountItem);
