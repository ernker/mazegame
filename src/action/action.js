export function actionMove(coords) {
    return {
        type: 'MOVE',
        moveToCoords: coords
    };
}

export function actionReplay(coords) {
    return {
        type: 'REPLAY',
        moveToCoords: coords
    };
}

export function actionNextMaze() {
    return {
        type: 'NEXTMAZE'
    };
}

export function actionReset() {
    return {
        type: 'RESET'
    };
}
