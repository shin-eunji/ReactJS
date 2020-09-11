import {combineReducers} from "redux";
import {reducer as appReducer} from './app/redux';
import {reducer as userReducer} from './user/redux';

const reducer = combineReducers({
    app: appReducer,
    user: userReducer
})


export default reducer