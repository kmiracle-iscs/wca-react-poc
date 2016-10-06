/*
    The functions in this file are specific to these redux dev tools:
        https://github.com/zalmoxisus/redux-devtools-extension

    They allow us to recreate a json blob almost identical to the
        download / export feature of that chrome extension. Our
        exported json is compatible with the upload / import feature
        of the extension.
 */
import cloneDeep from 'lodash/cloneDeep';


let size = 0,
    committedState = null;

const actionsById = {},
    computedStates = [],
    stagedActionIds = [];

export const recordingMiddleware = store => next => action => {
    actionsById[size] = {
        type: 'PERFORM_ACTION',
        action: cloneDeep(action),
        timestamp: Date.now()
    };

    stagedActionIds.push(size);

    ++size;

    const result = next(action),
        state = cloneDeep(store.getState());

    committedState = state;

    computedStates.push({
        state
    });

    return result;
};

export const getHistory = () => ({
    actionsById,
    committedState,
    computedStates,
    currentStateIndex: size - 1,
    monitorState: {},
    nextActionId: size,
    skippedActionIds: [],
    stagedActionIds
});
