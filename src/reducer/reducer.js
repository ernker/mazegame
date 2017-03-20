export default function reducer(state, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'CODE':
            newState.code.runcode = action.runcode;
            break;

        case 'MOVE':
            newState.app.currentCoords = action.moveToCoords;
            newState.app.history.push(action.moveToCoords);
            break;

        case 'REPLAY':
            newState.app.currentCoords = action.moveToCoords;
            break;

        case 'NEXTMAZE':
            if (newState.app.mazeIndex < newState.app.mazes.length - 1) {
                newState.app.mazeIndex += 1;
            }
            else {
                newState.app.mazeIndex = 0;
            }
            newState.app.maze = newState.app.mazes[newState.app.mazeIndex];

            newState.app.history = [];
            newState.app.currentCoords = getEntryPosition(newState.app.maze);
            newState.app.history.push(newState.app.currentCoords);
            break;

        case 'RESET':
            newState.app.history = [];
            newState.app.currentCoords = getEntryPosition(newState.app.maze);
            newState.app.history.push(newState.app.currentCoords);
            break;

        default:
    }

    return newState;
};

function getPortalPosition(maze, portalType) {
    let coords = {x: -1, y: -1};

    for (let x = 0; x < maze.length; x++) {
        for (let y = 0; y < maze[x].length; y++) {
            if (maze[y][x] === portalType) {
                coords = {x: x, y: y};
                break;
            }
        }
    }

    return coords;
}

function getEntryPosition(maze) {
    return getPortalPosition(maze, 2);
}
