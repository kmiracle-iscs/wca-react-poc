import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';



class T extends React.Component {

    translate(path) {
        return _.get(this.props.translations, `${this.props.language}.${path}`);
    }

    render() {
        if (_.isEmpty(this.props.translations)) {
            return(<span></span>)
        } else {
            return (
                <span>{this.translate(this.props.path)}</span>
            )
        }
    }
}

T.propTypes = {
    path: React.PropTypes.string.isRequired,
    language: React.PropTypes.string.isRequired,
    translations: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        language: state.config.language,
        translations: state.config.translations
    };
};

export default T = connect(mapStateToProps)(T);
