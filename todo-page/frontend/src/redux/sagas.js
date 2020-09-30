import {all} from 'redux-saga/effects'
import todosSaga from './todos/saga'

export default function* () {
    yield all([
        todosSaga()
    ])
}