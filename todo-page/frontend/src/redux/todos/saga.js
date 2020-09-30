import {Action} from "./redux";
import API from "../../api";
import {all, takeLatest, call, put} from "redux-saga/effects";

export default function* () {
    yield all([
        takeLatest(Action.Types.GET_TODOS, function*() {
            const result = yield call(API.getTodos)
            console.log("[saga] getTodos", result);
            yield put(Action.Creators.updateState({
                list: result
            }))
        }),
        takeLatest(Action.Types.ADD_TODO, function*() {
            const result = yield call(API.addTodo)
            console.log("[saga] addTodo", result);
        }),
    ])
}