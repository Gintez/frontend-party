import { take, call, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as api from 'app/api/api';
import paths from 'app/routes/paths';
import { updateAuthToken, clearAuthToken } from 'app/helpers/storage';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from './constants';

export function* loginFlow() {
    while (true) {
        const { formData } = yield take(LOGIN_REQUEST);

        try {
            const { data: { token } } = yield call(api.login, formData);

            updateAuthToken(token);
            yield put(push(paths.serverList));
        } catch (error) {
            // DOTO: handle error
        }
    }
}

export function* logoutFlow() {
    while (true) {
        yield take(LOGOUT_REQUEST);
        clearAuthToken();
        yield put(push(paths.login));
    }
}

export default function* saga() {
    yield all([
        loginFlow(),
        logoutFlow(),
    ]);
}
