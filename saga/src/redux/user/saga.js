import {all, takeLatest, call, put} from 'redux-saga/effects'
import {Action} from "../user/redux";
import API from "../../api";

export default function*() {
    yield all([
        takeLatest(Action.Types.GET_USERS, function*() {
            const result = yield call(API.getUsers)
            if(result.data) {
                yield put(Action.Creators.getUsers({
                    users: result.data
                }))
            }
        })

    ])
}