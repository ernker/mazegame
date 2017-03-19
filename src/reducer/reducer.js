export default function reducer(state, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'CODE':
            newState.code.runcode = action.runcode;
            break;

        case 'MOVE':
            newState.app.currentCoords = action.moveToCoords;
            break;

        default:
    }

    return newState;
};
