import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import configureStore from './store/store.js'

export let initState = {
    app: {
      name: 'Maze game'
    }
}

let store = configureStore(initState)
 
ReactDOM.render(
  (
    <Provider store={store}>
        <App />
    </Provider>
  ),
  document.getElementById('root')
);
