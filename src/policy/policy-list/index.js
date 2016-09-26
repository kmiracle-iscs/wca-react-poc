import React from 'react';
import { connect } from 'react-redux'

export class PolicyListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Policies</h1>
                <ul>
                    {this.props.policies.map(policy => {
                        return <li key={policy.id}>{policy.policyNumber}</li>
                    })}
                </ul>
            </div>
        )
    }
}

PolicyListComponent.propTypes = {
    policies: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const { policies } = state;
    return {
        policies
    }
}

PolicyListComponent = connect(mapStateToProps)(PolicyListComponent);
