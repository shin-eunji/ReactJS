import store from "./store";
import {bindActionCreators} from "redux";

import {Action as appAction} from './app/redux';
import {Action as todoAction} from './todos/redux';



const dipatch = store.dispatch;

export const appActions = bindActionCreators(appAction.Creators, dipatch);
export const todosActions = bindActionCreators(todoAction.Creators, dipatch);