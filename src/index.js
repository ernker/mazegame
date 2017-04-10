import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from "react-redux";
import configureStore from "./store/store.js";
import App from './App.js';


 
export default function init() {
    return {mazeToRenderIndex: 1};
};

let store = configureStore(init());
injectTapEventPlugin();

ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
), document.getElementById('root'));