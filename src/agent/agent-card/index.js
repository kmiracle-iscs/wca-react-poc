import React from 'react';
import { connect } from 'react-redux';

import { getAgent } from '../actions';

export class AgentCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAgent();
    }

    render() {
        return (
            <div className="agent-panel">
                <div className="agent-address">
                    <div className="location">{this.props.agent.displayLabel}</div>
                    <div className="address">{this.props.agent.contactAddress.address}<br/>{this.props.agent.contactAddress.city}, {this.props.agent.contactAddress.state} {this.props.agent.contactAddress.zip}</div>
                </div>
                <div className="agent-email">
                    <div className="email-header">Email</div>
                    <div className="email">pete.dichiara@iscs.com</div>
                </div>
                <div className="agent-phone">
                    <div className="phone-header">Mobile</div>
                    <div className="phone">(800)555-5555 x123</div>
                </div>
            </div>
        )
    };
}

AgentCard.propTypes = {
    agent: React.PropTypes.object.isRequired,
    getAgent: React.PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
        getAgent: () => {dispatch(getAgent())}
    };
}

function mapStateToProps(state) {
    return { agent: state.agent };
}

AgentCard = connect(mapStateToProps, mapDispatchToProps)(AgentCard);