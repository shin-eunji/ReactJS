import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as todosAction} from './todos/redux';

const {dispatch} = store;

export const todosActions = bindActionCreators(todosAction.Creators, dispatch)