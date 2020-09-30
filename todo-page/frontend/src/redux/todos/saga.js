import {all, takeLatest} from "redux-saga";
import {Action} from "./redux";
import API from "../../api";

export default function*() {
    yield all([
        takeLatest(Action.Types.GET_TODOS, function*() {
            const result = yield call(API.getTodos)
            console.log("[saga] Todos", result);
            yield put(Action.Creators.updateState({
                list: result
            }))
        })
    ])
}