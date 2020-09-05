import store from './store';
import {Action as AppAction} from './app/redux';
import {Action as UserAction} from './user/redux';
import {bindActionCreators} from "redux";

const {dispatch} = store;

export const appAction = bindActionCreators(AppAction.Creators, dispatch);
export const userAction = bindActionCreators(UserAction.Creators, dispatch);