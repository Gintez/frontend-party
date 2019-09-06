import { take, call, all, put } from 'redux-saga/effects';

import api from 'app/api';
import { REQUEST_SERVERS, SET_SERVERS } from './constants';

export function* fetchServersFlow() {
    while (true) {
        yield take(REQUEST_SERVERS);

        try {
            const { data } = yield call(api.getServers);

            yield put({ type: SET_SERVERS, payload: data });
        } catch (error) {
            // DOTO: handle error
        }
    }
}

export default function* saga() {
    yield all([
        fetchServersFlow(),
    ]);
}
