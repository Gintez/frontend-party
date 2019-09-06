import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import serversSaga from './servers/sagas';

export default function* rootSaga() {
    yield all([
        authSaga(),
        serversSaga(),
    ]);
}
