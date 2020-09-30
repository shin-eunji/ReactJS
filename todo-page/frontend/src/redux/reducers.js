import {combineReducers} from "redux";
import {reducer as todosReducer} from './todos/redux'

export const reducer = combineReducers({
    todos: todosReducer
})

