import {all, takeLatest, call} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.GET_USER, function*({payload}) {
            const result = yield call(API.getUser, payload)
            console.log("result", result);
        })
    ])
}

