import store from './store'
import {bindActionCreators} from "redux";

import {Action as appAction} from './app/redux'
import {Action as todosAction} from './todos/redux'

const dispatch = store.dispatch;

export const appActions = bindActionCreators(appAction.Creators, dispatch);
export const todosActions = bindActionCreators(todosAction.Creators, dispatch);