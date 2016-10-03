import React from 'react';
import { connect } from 'react-redux';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPhone from 'react-icons/lib/fa/phone';

import { getAgent } from '../actions';
import styles from '../../index.css';

export class AgentCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAgent();
    }

    render() {
        return (
            <div hidden={this.props.agent.isFetching} className={styles['agent-panel']}>
                <div className={styles['agent-address']}>
                    <div className={styles['location']}>{this.props.agent.displayLabel}</div>
                    <div className={styles['address']}>{this.props.agent.contactAddress.address}
                        <br/>
                        {this.props.agent.contactAddress.city}, {this.props.agent.contactAddress.state} {this.props.agent.contactAddress.zip}</div>
                </div>
                <div className={styles['agent-contact']}>
                    {this.props.agent.contacts.map((contact, index) => {
                        return (
                            <div key={index} className={contact.type}>
                                <div className={styles['contact-type']}>
                                    {(
                                        contact.label == "Email" 
                                            ? <FaEnvelope/> 
                                            : <FaPhone/>
                                    )}
                                </div>
                                <div className={styles['contact-value']}>{contact.value}</div>
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

function mapDispatchToProps(dispatch) {
    return {
        getAgent: () => {dispatch(getAgent())}
    };
}

function mapStateToProps(state) {
    return { 
        isFetching: state.agent.isFetching,
        agent: state.agent
    };
}

AgentCard = connect(mapStateToProps, mapDispatchToProps)(AgentCard);
