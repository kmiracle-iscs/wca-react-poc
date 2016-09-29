import React from 'react';
import { connect } from 'react-redux';

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
            <div className="m-t-3">
                <h4>Policies {this.props.isFetching && <img src="ajax-loader.gif" />}</h4>
                <table className="table">
                    <tbody>
                        {this.props.policies.map(policy => {
                            return (<tr key={policy.id}>
                                <td>{policy.policyNumber}</td>
                                <td>{policy.type}</td>
                                <td>{policy.expirationDt}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

PolicyList.propTypes = {
    isFetching: React.PropTypes.bool.isRequired,
    policies: React.PropTypes.array.isRequired,
    getPolicies: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        getPolicies: () => {dispatch(getPolicies())}
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.policies.isFetching,
        policies: state.policies.items
    };
}

PolicyList = connect(mapStateToProps, mapDispatchToProps)(PolicyList);
