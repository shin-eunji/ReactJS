import store from './store';
import {bindActionCreators} from 'redux'

import {Action as AppAction} from './app/redux';
import {Action as TodosAction} from './todos/redux';



const dispatch = store.dispatch;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const todosActions = bindActionCreators(TodosAction.Creators, dispatch);