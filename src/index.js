import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";
import configureStore from "./store/store.js";

let initState = {
    code: {
      runcode: ''
    },
    app: {
        name: 'Maze game',
        mazeArray: [
            [2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3]
        ],
        currentCoords: {x: 0, y: 0}
    }
};

let store = configureStore(initState);

ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ),
    document.getElementById('root')
);
