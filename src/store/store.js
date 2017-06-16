import {applyMiddleware, createStore, compose} from "redux";
import reducer from "../reducer/reducer.js";
import logger from "redux-logger";

// const finalcreateStore = compose(applyMiddleware(logger()))(createStore);

const finalcreateStore = compose(applyMiddleware())(createStore);

export default function configureStore(initState) {
    return finalcreateStore(reducer, initState)
}