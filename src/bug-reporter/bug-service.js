import axios from 'axios';


import { getHistory } from './history';


const emailState = (issue, state) => {
    return axios.post(
        'http://162.243.89.232:5000/bug', // TODO: externalize
        {
            description: 'Bug from WCA React Demo',
            emailTo: 'david.livingston@iscs.com',
            contactInfo: issue.contact,
            reproductionSteps: issue.repo,
            expectedResults: issue.expected,
            actualResults: issue.actual,
            state
        },
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    );
};


const createJira = issue => {
    // TODO
    const issueStub = {
        id: 'WCA-XXX (mocked / todo)',
        url: '//www.google.com'
    };

    return new Promise(resolve => {
        window.setTimeout(() => {
            resolve(issueStub)
        }, 3000);
    });
};


const reportBug = issue => {
    const state = getHistory();

    console.log('state', state);

    // don't die on failure, creating the JIRA issue is the essential action
    emailState(issue, state)
        .then(() => {
            console.debug('emailed state', state);
        })
        .catch(err => {
            console.error('Error emailing state with bug report.', err);
            console.debug('state', state);
        });

    return createJira(issue);
};

export default reportBug;
