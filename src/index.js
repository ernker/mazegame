import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";
import configureStore from "./store/store.js";

const initState = {
    code: {
        runcode: ''
    },
    app: {
        name: 'Maze game',
        mazes: [[[2, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
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
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 3]]],
        maze: [],
        currentCoords: {x: 0, y: 0}
    }
};

initState.app.maze = initState.app.mazes[1];

let store = configureStore(initState);

ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.getElementById('root')
);
