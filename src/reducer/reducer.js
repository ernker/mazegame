import init from "../index";
import {Maze, EntryPortal} from "../lib/Maze";
import {Mazes} from "./mazes";

export default function reducer(state = init(), action) {
    let newState = {};

    switch (action.type) {
        case 'DRAWMAZE':
            newState.mazeToRender = [...state.mazeToRender];
            let newCoordsMove = action.botCoords;
            newState.botCoordsToRender = newCoordsMove;
            break;

        case 'NEXTMAZE':
            if (state.mazeToRenderIndex < Mazes.length - 1) {
                newState.mazeToRenderIndex = state.mazeToRenderIndex + 1;
            }
            else {
                newState.mazeToRenderIndex = 0;
            }
            newState.mazeToRender = [...Mazes[newState.mazeToRenderIndex]];
            let entryPositionNextMaze = Maze.getPortalPosition(newState.mazeToRender, EntryPortal);
            newState.botCoordsToRender = entryPositionNextMaze;

            window.Maze = new Maze(newState.mazeToRender);
            break;

        default:
            newState.mazeToRender = [...Mazes[state.mazeToRenderIndex]];
            let entryPositionDefault = Maze.getPortalPosition(newState.mazeToRender, EntryPortal);
            newState.botCoordsToRender = entryPositionDefault;

            window.Maze = new Maze(newState.mazeToRender);
    }

    return newState;
};
