import {combineReducers} from "redux";
import {reducer as appReducer} from './app/redux';
import {reducer as todosReducer} from './todos/redux';

const reducers = combineReducers({
    app: appReducer,
    todos: todosReducer
});


export default reducers;