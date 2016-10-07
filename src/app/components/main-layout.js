import React from 'react';


import { Nav } from './nav-component';
import { SideNav } from './side-nav';
import BugReporter from '../../bug-reporter';
import LanguageSwitcher from './language';
import AgentConfigurable from '../../agent/agent-configurable';


export class MainLayout extends React.Component {

    render() {
        return (
            <div>
                <div className="m-t-2">
                    <div className="col-lg-3 m-t-3 p-r-3 p-l-0">
                        <SideNav />
                        <AgentConfigurable />
                    </div>
                    <div className={`col-lg-9 p-l-3 m-t-3`}>
                        <Nav />
                        {this.props.children}
                    </div>
                </div>
                <BugReporter />
                <LanguageSwitcher />
            </div>
        )
    }
}
