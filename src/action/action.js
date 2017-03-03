export function runCodeAsync(code){
    return dispatch => {
        window.runCode(code)
            .then(rez => {
                dispatch(runCodeAction(rez))
            });

    }
}

function runCodeAction(rez) {
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
