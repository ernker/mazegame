import {applyMiddleware, createStore, compose} from 'redux'
import reducer from '../reducer/reducer.js'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const finalcreateStore = compose(applyMiddleware(thunk, logger()))(createStore);

export default function configureStore(initState) {
    return finalcreateStore(reducer, initState)
}