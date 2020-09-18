import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Action} from './redux';
import API from "../../api";


export default function*() {
    yield all([
        takeLatest(Action.Types.GET_TODOS, function*() {
            const result = yield call(API.getTodos)
            console.log("result", result);
            yield put(Action.Creators.updateState({
                list: result
            }))
        })

    ])
}