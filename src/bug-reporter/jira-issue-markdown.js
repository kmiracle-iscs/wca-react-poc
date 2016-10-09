import attempt from 'lodash/attempt';


const appName = 'WCA React demo web app';


export const jiraTemplate = ({ repro, expected, actual }, debuggingDetails) =>
`

{panel:title=Bug reported by the ${appName} (Bug Reporter form)|borderStyle=dashed|borderColor=#ccc|titleBGColor=#F7D6C1|bgColor=#FFFFCE}
The root issue may be ${appName}, API, SPI, or user error.
{panel}

h2. Error Details from user

h3. Reproduction Steps

${repro}

h3. Expected Results

${expected}

h3. Actual Results

${actual}


h2. Debugging Details / Application State

{code:javascript}
const appState = ${attempt(() => JSON.stringify(debuggingDetails, null, 4))};
{code}
`;
