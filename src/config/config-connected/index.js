import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';


import { getConfig } from '../../config/actions';


export default function configConnected(WrappedComponent) {

    class ConfigConnectedBase extends React.Component {
        constructor(props) {
            super(props)
        }

        componentWillMount() {
            this.props.getConfig();
        }

        render() {
            if (_.isEmpty(this.props.features)) {
                return (<div>Loading...</div>)
            } else {
                return (
                    <div>
                        <WrappedComponent {...this.props} />
                    </div>
                )
            }
        }
    }

    ConfigConnectedBase.propTypes = {
        features: React.PropTypes.object.isRequired
    };

    function mapStateToProps(state) {
        return {
            features: state.config.features
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            getConfig: () => {dispatch(getConfig())}
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(ConfigConnectedBase);
}
