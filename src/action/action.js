export function actionRunCodeAsync(code) {
    return dispatch => {
        window.runCode(code)
            .then(rez => {
                dispatch(actionRunCode(rez))
            });
    };
}

function actionRunCode(rez) {
    return {
        type: 'CODE',
        runcode: rez
    };
}

export function actionMove(coords) {
    return {
        type: 'MOVE',
        moveToCoords: coords
    };
}
