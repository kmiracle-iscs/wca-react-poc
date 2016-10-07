import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';



const configConnected = (WrappedComponent) => {

    class ConfigConnectedBase extends React.Component {

        render() {
            if (_.isEmpty(this.props.features)) {
                return (<div></div>)
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

    const mapStateToProps = (state) => {
        return {
            features: state.config.features
        }
    };

    return connect(mapStateToProps)(ConfigConnectedBase);
};

export default configConnected;
