import {all} from 'redux-saga/effects'
import AppSaga from './app/saga'
import UserSaga from './user/saga'


export default function*() {
    yield all([
        AppSaga(),
        UserSaga()
    ])
}
