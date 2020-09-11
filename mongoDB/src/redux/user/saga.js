import {all, takeLatest, call, put} from 'redux-saga/effects'
import {Action} from "./redux";
import API from "../../api";

export default function*() {
    yield all([
        takeLatest(Action.Creators.getUsers, function*() {
            const result = yield call(API.getUsers)
            
            if(result.data) {
                yield put(Action.Creators.updateState({
                    users: result.data
                }))
            }
        })
    ])
}