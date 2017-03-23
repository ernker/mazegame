import init from "../index";

const mazes = [[[2, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 3]],

    [[2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3]],

    [[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3]],

    [[2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 3]],

    [[2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3]],

    [[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 3]],

    [[2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 3]]];

export default function reducer(state = init(), action) {
    //let newState = Object.assign({}, state);
    let newState = {};

    switch (action.type) {
        case 'MOVE':
            newState.maze = [...state.maze];
            newState.mazeIndex = state.mazeIndex;
            let newCoordsMove = action.moveToCoords;
            newState.currentCoords = newCoordsMove;
            newState.history = [...state.history, newCoordsMove];
            break;

        case 'REPLAY':
            newState.maze = [...state.maze];
            newState.mazeIndex = state.mazeIndex;
            newState.currentCoords = action.moveToCoords;
            newState.history = [...state.history];
            break;

        case 'NEXTMAZE':
            if (state.mazeIndex < mazes.length - 1) {
                newState.mazeIndex = state.mazeIndex + 1;
            }
            else {
                newState.mazeIndex = 0;
            }
            newState.maze = [...mazes[newState.mazeIndex]];
            let entryPositionNextMaze = getEntryPosition(newState.maze);
            newState.currentCoords = entryPositionNextMaze;
            newState.history = [entryPositionNextMaze];
            break;

        case 'RESET':
            newState.maze = [...state.maze];
            newState.mazeIndex = state.mazeIndex;
            let entryPositionReset = getEntryPosition(newState.maze);
            newState.currentCoords = entryPositionReset;
            newState.history = [entryPositionReset];
            break;

        default:
            newState.maze = [...state.maze];
            newState.mazeIndex = state.mazeIndex;
            let entryPositionDefault = getEntryPosition(newState.maze);
            newState.currentCoords = entryPositionDefault;
            newState.history = [entryPositionDefault];
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
