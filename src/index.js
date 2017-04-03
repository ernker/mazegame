import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";
import configureStore from "./store/store.js";

export default function init() {
    return {
        mazeToRenderIndex: 1
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
