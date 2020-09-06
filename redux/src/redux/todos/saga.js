import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from "./redux";
import API from '../../api'



export default function* () {
    yield all([
        takeLatest(Action.Types.GET_TODOS, function*() {
            yield put(Action.Creators.updateState({
                isLoading: true
            }))

            try {
                const result = yield call(API.getTodos)
                if(result.data) {
                    yield put(Action.Creators.updateState({
                        list: result.data
                    }))
                }
            } catch (e) {
            } finally {
                yield put(Action.Creators.updateState({
                    isLoading: false
                }))
            }

            
        })
    ])
}

