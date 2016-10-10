import { connect } from 'react-redux';
import React from 'react';
import { changeLanguage } from '../../config/actions';


class LanguageSwitcher extends React.Component {

    constructor(props) {
        super(props);

        this.handleLanguageChange = this.handleLanguageChange.bind(this);
    }

    handleLanguageChange(language) {
        return () => {
            this.props.changeLanguage(language);
        }
    }

    render() {
        if (this.props.language) {
            return (
                <div className="col col-lg-12" style={{ textAlign: 'center' }}>
                    {this.props.language === 'english'
                        ? <button className="btn btn-primary" onClick={this.handleLanguageChange('spanish')}> Español </button>
                        : <button className="btn btn-primary" onClick={this.handleLanguageChange('english')}> English </button>
                    }
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
}

LanguageSwitcher.propTypes = {
    language: React.PropTypes.string.isRequired,
    changeLanguage: React.PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
  return {
      changeLanguage: (language) => {dispatch(changeLanguage(language))}
  }
};

const mapStateToProps = (state) => {
    return {
        language: state.config.language
    }
};

export default LanguageSwitcher = connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);
