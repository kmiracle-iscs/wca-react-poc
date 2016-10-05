import React, { Component } from 'react';
import identity from 'lodash/identity';
import isEmpty from 'lodash/isEmpty';
import mapValues from 'lodash/mapValues';
import pickBy from 'lodash/pickBy';


import View from './view';
import reportBug from './bug-service';


const initialState = {
    isWaiting: false,
    createdIssue: null,
    apiError: null,
    inputs: {}
};


export default class BugReporter extends Component {

    constructor (props) {
        super(props);

        this.state = initialState;
    }


    render() {
        const { apiError, createdIssue, isWaiting } = this.state;

        const viewProps = {
            apiError,
            createdIssue,
            hideError:      this._clearError.bind(this),
            hideIssue:      this._clearIssue.bind(this),
            isValid:        isEmpty(this._getErrors()),
            isWaiting,
            questions:      this._getQuestionsWithState(),
            reportBug:      this._submit.bind(this),
            updateInput:    this._updateInput.bind(this)
        };

        return React.createElement(View, viewProps);
    }


    _updateInput (id, event) {
        const { value } = event.target,
            { inputs } = this.state;

        this.setState({
            inputs: Object.assign({}, inputs, {
                [id]: value
            })
        });
    }


    _submit () {
        const issue = this._getIssue();

        this.setState({
            isWaiting: true
        });

        return reportBug(issue)
            .then(issue => {
                this.setState(Object.assign({}, initialState, {
                    createdIssue: issue,
                    isWaiting: false
                }));
            })
            .catch(error => {
                this.setState({
                    apiError: error,
                    isWaiting: false
                });
            });
    }


    _getIssue () {
        return this.state.inputs;
    }


    _getErrors () {
        // get { questionId: questionError }
        const questionIdToError = mapValues(this._getQuestionsWithState(), q => q.error);

        // return { questionId: questionError } where questionError exists
        return pickBy(questionIdToError, identity);
    }


    _getQuestions () {
        return [
            {
                id: 'contact',
                label: 'Contact Info',
                placeholder: 'Your name or email address'
            },
            {
                type: 'textarea',
                id: 'repro',
                label: 'Reproduction Steps',
                rows: 5,
                placeholder: 'Please include how to reproduce the defect. For example:\n* Address / zip\n* Inputs used\n* Device'
            },
            {
                type: 'textarea',
                id: 'expected',
                label: 'Expected Results',
                rows: 3,
                placeholder: 'What should have happened'
            },
            {
                type: 'textarea',
                id: 'actual',
                label: 'Actual Results',
                rows: 3,
                placeholder: 'Describe the error'
            }
        ];
    }


    _getQuestionsWithState () {
        const questions = this._getQuestions();

        return questions.map(q => {
            const value = (this.state.inputs[q.id] || '').trim(),
                error = value ? null : 'required';

            return Object.assign({}, q, { value, error });
        });
    }


    _clearError () {
        this.setState({
            apiError: null
        });
    }


    _clearIssue () {
        this.setState({
            createdIssue: null
        });
    }

}
