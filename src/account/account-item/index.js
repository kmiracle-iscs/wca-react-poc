import React from 'react';

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
