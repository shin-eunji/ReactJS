import {combineReducers} from "redux";
import {reducer as appReducer} from './app/redux';
import {reducer as userReducer} from './app/redux';

const reducer = combineReducers({
    app: appReducer,
    user: userReducer
})


export default reducer