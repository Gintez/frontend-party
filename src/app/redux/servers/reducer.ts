import { handleActions } from 'redux-actions';
import { assoc } from 'ramda';

import { ServersModel } from 'app/types';
import { SET_SERVERS, RESET_SERVERS_LISTS } from './constants';

export interface ServersState {
    servers: ServersModel;
}

function getInitialState(): ServersState {
    return {
        servers: null,
    };
}

export const reducer = handleActions<ServersState>(
    {
        [SET_SERVERS]: (state, { payload }) => assoc('servers', payload, state),
        [RESET_SERVERS_LISTS]: getInitialState,
    },
    getInitialState(),
);
