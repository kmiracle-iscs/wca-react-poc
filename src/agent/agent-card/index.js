import React from 'react';
import { connect } from 'react-redux';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPhone from 'react-icons/lib/fa/phone';

import { getAgent } from '../actions';
import './styles.post.css';


export class AgentCard extends React.Component {

    componentWillMount() {
        this.props.getAgent();
    }

    render() {
        return (
            <div hidden={this.props.agent.isFetching} className="agent-card">
                <div className="agent-card__contact">
                    <div className="agent-card__location">{this.props.agent.displayLabel}</div>
                    <div className="agent-card__address">{this.props.agent.contactAddress.address}
                        <br/>
                        {this.props.agent.contactAddress.city}, {this.props.agent.contactAddress.state} {this.props.agent.contactAddress.zip}</div>
                </div>
                <div className="agent-card__contacts-wrapper">
                    {this.props.agent.contacts.map((contact, index) => {
                        return (
                            <div key={index} className={`agent-card__contact--${contact.type}`}>
                                <div className="agent-card__contact-type">
                                    {(
                                        contact.label == "Email"
                                            ? <FaEnvelope/>
                                            : <FaPhone/>
                                    )}
                                </div>
                                <div className="agent-card__contact-value">{contact.value}</div>
                            </div>
                            )
                    })}
                </div>
            </div>
        )
    };
}

AgentCard.propTypes = {
    isFetching: React.PropTypes.bool.isRequired,
    agent: React.PropTypes.object.isRequired,
    getAgent: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAgent: () => {dispatch(getAgent())}
    };
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.agent.isFetching,
        agent: state.agent
    };
};

AgentCard = connect(mapStateToProps, mapDispatchToProps)(AgentCard);
