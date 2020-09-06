import { combineReducers } from 'redux'
import appReducer from './app/redux'
import todoReducer from './todos/redux'

const reducers = combineReducers({
    app: appReducer,
    todos: todoReducer

})

export default reducers;