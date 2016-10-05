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
