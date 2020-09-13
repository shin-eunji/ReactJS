import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from "./redux";
import API from '../../api'
import {navigate} from "../../lib/History";



export default function* () {
    yield all([
        takeLatest(Action.Types.GET_TODOS, function*() {
            yield put(Action.Creators.updateState({
                isLoading: true
            }))

            const result = yield call(API.getTodos)
            if(result) {
                yield put(Action.Creators.updateState({
                    list: result
                }))
            }

            yield put(Action.Creators.updateState({
                isLoading: false
            }))
        }),

        takeLatest(Action.Types.ADD_TODO, function*({payload}) {
            const result = yield call(API.addTodo, payload);
            console.log("[saga] add todo", payload);
            console.log("result", result);

            if (result) {
                navigate('/todos')
            } else {

            }

        })

    ])
}

