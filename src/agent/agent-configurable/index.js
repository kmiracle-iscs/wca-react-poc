import React from 'react';

import configConnected from '../../config/config-connected';
import { AgentCard } from '../agent-card';
import styles from '../../index.css';


// Based on config that comes from parent class, determines which Agent feature component to show
class AgentConfigurable extends React.Component {
    render() {
        if (this.props.features.AgentCard) {
            return (
                <AgentCard />
            )
        } else {
            return (<div></div>)
        }
    }
}

export default configConnected(AgentConfigurable);
