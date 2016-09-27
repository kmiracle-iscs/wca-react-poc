import React from 'react';
import { connect } from 'react-redux'

import { getPolicies } from '../actions';

export class PolicyList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getPolicies();
    }

    render() {
        return (
            <div>
                    <h3>Policies</h3>
                    <ul>
                        {this.props.policies.map(policy => {
                            return <li key={policy.id}>{policy.policyNumber}</li>
                        })}
                    </ul>
            </div>
        )
    }
}

PolicyList.propTypes = {
    policies: React.PropTypes.array.isRequired,
    getPolicies: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        getPolicies: () => {dispatch(getPolicies())}
    }
}

function mapStateToProps(state) {
    return { policies: state.policies };
}

PolicyList = connect(mapStateToProps, mapDispatchToProps)(PolicyList);
