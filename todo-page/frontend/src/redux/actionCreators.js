import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as appAction} from './app/redux';
import {Action as todosAction} from './todos/redux';

const {dispatch} = store;

export const appActions = bindActionCreators(appAction.Creators, dispatch)
export const todosActions = bindActionCreators(todosAction.Creators, dispatch)