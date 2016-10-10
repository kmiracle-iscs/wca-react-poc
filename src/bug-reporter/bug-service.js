import axios from 'axios';
import get from 'lodash/get';


import { getHistory } from './history';
import { jiraTemplate } from './jira-issue-markdown';
import { store } from '../app';
import { apiKey } from '../config/config-service';


// TODO: externalize endpoints
const emailEndpoint = 'http://162.243.89.232:5000/bug',
    jiraEndpoint = 'https://api.iscs.io/api/support';


// can't use our ApiService because these aren't v2 services and they don't take bearerTokens
// create new instance without interceptors
const rawAxios = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


const emailState = (issue, state) => {
    return rawAxios.post(
        emailEndpoint,
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
            timeout: 5 * 1000
        }
    );
};


const createJira = issue => {
    const state = store.getState(),
        { CreateJiraIssues } = get(state, 'config.features', {});

    if (!CreateJiraIssues) {
        const issueStub = {
            "id" : "TRIAGE-927 (mocked for demo)",
            "url" : "https://approck.atlassian.net/browse/TRIAGE-927",
            "success" : true
        };

        return Promise.resolve(issueStub);
    }

    // if we include state in the jira issue, it will fail silently (request hangs)
    //      because state is too large
    return rawAxios.post(
        jiraEndpoint,
        {
            summaryText: `WCA React Demo issue reported by ${issue.contact}`,
            detailText: jiraTemplate(issue, { tooBigFor: 'JIRA' })
        },
        {
            timeout: 30 * 1000,
            headers: {
                'X-ISCS-API-KEY': apiKey,
                'ISCS_API_KEY': apiKey
            }
        }
    ).then(response => response.data);
};


const reportBug = issue => {
    const stateHistory = getHistory();

    // don't die on failure, creating the JIRA issue is the essential action
    emailState(issue, stateHistory)
        .then(() => {
            console.debug('emailed state history', stateHistory);
        })
        .catch(err => {
            console.error('Error emailing state with bug report.', err);
            console.debug('state history', stateHistory);
        });

    return createJira(issue);
};

export default reportBug;
