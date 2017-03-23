import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";
import configureStore from "./store/store.js";
import Maze from "./lib/Maze";

window.Maze = new Maze();

export default function init() {
    return {
        maze: [[2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
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
        mazeIndex: 1,
        currentCoords: {x: 0, y: 0},
        history: []
    };
};

let store = configureStore(init());

ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.getElementById('root')
);
