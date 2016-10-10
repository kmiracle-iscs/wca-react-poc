import React, { Component, PropTypes } from 'react';
import noop from 'lodash/noop';


import styles from './bug-reporter.css';


const Alert = ({ alertClass, children, dismiss }) =>
    <div className={`${styles.alert} alert alert-${alertClass}`} role="alert">
        <button onClick={dismiss} type="button" className="close" aria-hidden="true" aria-label="Close">
            <i className="fa fa-close"></i>
        </button>
        {children}
    </div>;


const ApiError = ({ error, dismiss }) =>
    <Alert alertClass="danger" dismiss={dismiss}>
        <strong>Error!</strong> Could not create issue.
        <div>
            <pre style={{ textAlign: 'left' }}>
                {JSON.stringify(error.data, null, 4)}
            </pre>
        </div>
    </Alert>;


const IssueLink = ({ issue, dismiss }) =>
    <Alert alertClass="success" dismiss={dismiss}>
        <strong>Success!</strong> Created issue.
        <div>
            <a href={issue.url} target="_blank">{issue.id}</a>
        </div>
    </Alert>;


class Question extends Component {

    render () {
        const p = this.props,
            { placeholder, rows, value, readOnly } = p;

        return (
            <div className={`${styles.question} row`}>
                <label className={`${styles['question__label']} col-sm-3`}>
                    { p.label }
                </label>
                <div className="col-sm-9">
                    { React.createElement(p.type || 'input', {
                        className: styles['question__input'],
                        value,
                        placeholder,
                        readOnly,
                        rows,
                        onChange: e => p.updateInput(p.id, e),
                        onBlur: () => p.blurInput(p.id)
                    })}
                    { (p.error && !p.suppressErrors) &&
                        <div className={styles['question__error']}>
                            { p.error }
                        </div>
                    }
                </div>
            </div>
        );
    }

}


const propTypes = {
    hideError:      PropTypes.func.isRequired,
    hideIssue:      PropTypes.func.isRequired,
    isWaiting:      PropTypes.bool.isRequired,
    questions:      PropTypes.arrayOf(PropTypes.shape({
        id:             PropTypes.string.isRequired,
        label:          PropTypes.string.isRequired,
        type:           PropTypes.string,
        placeholder:    PropTypes.string,
        rows:           PropTypes.number
    })).isRequired,
    reportBug:      PropTypes.func.isRequired,
    updateInput:    PropTypes.func.isRequired
};


const defaultProps = {
    hideError: noop,
    hideIssue: noop,
    isWaiting: false
};


export default class BugReporterView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
            blurred:    {}
        };
    }

    render() {
        const { isExpanded, blurred } = this.state,
            { questions, apiError, createdIssue, isWaiting, isValid } = this.props,
            { hideIssue, hideError, updateInput } = this.props,
            canSubmit = isValid && !isWaiting;

        return (
            <div className="row">
                <div className={`${styles.wrapper} col col-lg-12`}>
                    <div>
                        <button type="button"
                                className="btn btn-secondary"
                                disabled={isWaiting}
                                onClick={this._toggleFormVisibility.bind(this)}>
                            Report a Bug
                        </button>
                    </div>
                    { isExpanded &&
                        <form>
                            <div className={styles.questions}>
                                { questions.map(q =>
                                    <Question key={q.id}
                                              {...q}
                                              blurInput={this._fieldBlurred.bind(this)}
                                              suppressErrors={!blurred[q.id]}
                                              updateInput={updateInput}
                                              readOnly={isWaiting} />
                                ) }
                            </div>
                            <div>
                                <button type="submit"
                                        className={`${styles['submit-button']} btn btn-primary`}
                                        disabled={!canSubmit}
                                        onClick={this._submit.bind(this)}>
                                    Send Bug Report
                                </button>
                            </div>
                        </form>
                    }
                    {apiError && <ApiError error={apiError} dismiss={hideError} />}
                    {createdIssue && <IssueLink issue={createdIssue} dismiss={hideIssue} />}
                </div>
            </div>
        )
    }


    _fieldBlurred (id) {
        const { blurred } = this.state;

        this.setState({
            blurred: Object.assign({}, blurred, {
                [id]: true
            })
        });
    }


    _submit () {
        const { reportBug } = this.props;

        // leave form open on error
        reportBug()
            .then(() => {
                this.setState({
                    isExpanded: false
                });
            });
    }


    _toggleFormVisibility () {
        const { isExpanded } = this.state;

        this.setState({
            isExpanded: !isExpanded
        });
    }

}


BugReporterView.propTypes = propTypes;

BugReporterView.defaultProps = defaultProps;
