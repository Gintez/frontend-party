import { REQUEST_SERVERS, RESET_SERVERS_LISTS } from './constants';

export const fetchServersList = () => ({ type: REQUEST_SERVERS });
export const resetServersList = () => ({ type: RESET_SERVERS_LISTS });
