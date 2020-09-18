import {all, takeLatest, call} from 'redux-saga/effects';
import {Action} from './redux';
import {getTodos} from '../';


export default function*() {
    yield all([
        takeLatest(Action.types.GET_TODOS, function*() {
            const result = yield call(getTodos)
            console.log("result", result);
            yield put(Action.Creators.updateState({
                list: result
            }))
        })

    ])
}