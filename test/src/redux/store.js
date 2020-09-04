import { createStore } from "redux";
import { reducer } from './app/redux'

const store = createStore(reducer);


export default store;