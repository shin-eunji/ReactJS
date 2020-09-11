import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(sagas)


const store = createStore(reducers, applyMiddleware(sagaMiddleware));


export default store;