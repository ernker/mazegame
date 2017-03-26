export function actionDrawMazeAsync(botCoords) {
    return dispatch => {
/*        new Promise(resolve => setTimeout(resolve, 500))
            .then(dispatch({
                type: 'DRAWMAZE',
                botCoords: botCoords
            }));
*/
        setTimeout(() => {
            dispatch({
                type: 'DRAWMAZE',
                botCoords: botCoords
            });
        }, 500);
    }
}

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
