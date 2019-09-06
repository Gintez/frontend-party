import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { reducer as serversReducer, ServersState } from './servers/reducer';
import { NAME as serversName } from './servers/constants';

export interface RootState {
    router?: RouterState;
    [serversName]: ServersState;
}

export default (history: History) => combineReducers<RootState>({
    router: connectRouter(history),
    [serversName]: serversReducer,
});
