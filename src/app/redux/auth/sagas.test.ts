import { expectSaga } from 'redux-saga-test-plan';
import { push } from 'connected-react-router';

import * as api from 'app/api/api';
import * as storage from 'app/helpers/storage';
import paths from 'app/routes/paths';
import { loginFlow } from './sagas';
import * as authenticationActions from './actions';

const authMock = jest.spyOn(api, 'login');
const storageMock = jest.spyOn(storage, 'updateAuthToken');
const username = 'username';
const password = 'password';
const token = 'token';

describe('loginFlow', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('sucessul authorization', () => {
        let saga: any;

        beforeEach(() => {
            authMock.mockImplementation((): any => ({ data: { token } }));
            storageMock.mockImplementation(jest.fn());
            saga = expectSaga(loginFlow);
        });

        it('calls authorization api with username and password', async () => {
            saga.dispatch(authenticationActions.loginRequest({ username, password }));
            await saga.silentRun();
            expect(api.login).toHaveBeenCalledWith({ username, password });
        });

        it('sets access token with passed token', async () => {
            saga.dispatch(authenticationActions.loginRequest({ username, password }));
            await saga.silentRun();
            expect(storage.updateAuthToken).toHaveBeenCalledWith(token);
        });

        it('redirects to servers list', async () => {
            await saga
              .put(push(paths.serverList))
              .dispatch(authenticationActions.loginRequest({ username, password }))
              .silentRun();
        });
    });

    describe('unsuccessful authorization', () => {
        it('do not redirect to servers list', async () => {
            authMock.mockImplementation(() => Promise.reject());

            await expectSaga(loginFlow)
                .not.put(push(paths.serverList))
                .dispatch(authenticationActions.loginRequest({ username, password }))
                .silentRun();
        });
    });
});
