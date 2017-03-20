import init from "../index";

export default function reducer(state=init(), action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'CODE':
            newState.code = action.runcode;
            return newState;

        case 'MOVE':
            newState.currentCoords = action.moveToCoords;
            newState.history.push(action.moveToCoords);
            return newState;

        case 'REPLAY':
            newState.currentCoords = action.moveToCoords;
            return newState;

        case 'NEXTMAZE':
            if (newState.mazeIndex < newState.mazes.length - 1) {
                newState.mazeIndex += 1;
            }
            else {
                newState.mazeIndex = 0;
            }
            newState.maze = newState.mazes[newState.mazeIndex];

            newState.history = [];
            newState.currentCoords = getEntryPosition(newState.maze);
            newState.history.push(newState.currentCoords);
            return newState;

        case 'RESET':
            newState.history = [];
            newState.currentCoords = getEntryPosition(newState.maze);
            newState.history.push(newState.currentCoords);
            return newState;

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
