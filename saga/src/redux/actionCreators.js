import store from './store';
import {bindActionCreators} from 'redux'

import {Action as AppAction} from './app/redux';
import {Action as UserAction} from './user/redux';



const dispatch = store.dispatch;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const userActions = bindActionCreators(UserAction.Creators, dispatch);