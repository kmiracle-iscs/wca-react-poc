import React from 'react';

export class AccountItemComponent extends React.Component {
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

AccountItemComponent.propTypes = {
    account: React.PropTypes.object.isRequired
};
