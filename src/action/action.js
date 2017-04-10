export function actionDrawMaze(botCoords) {
    return {
        type: 'DRAWMAZE',
        botCoords: botCoords
    };
}

export function actionNextMaze() {
    return {
        type: 'NEXTMAZE'
    };
}

export function actionToken(payload) {
    return {
        type: 'TOKEN',
        token: payload
    };
}
