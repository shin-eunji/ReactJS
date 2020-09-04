import { combineReducers } from "redux";
import { reducer as appReducer } from './app/redux';

export const reducers = combineReducers({
    app: appReducer,
});

export default reducers;