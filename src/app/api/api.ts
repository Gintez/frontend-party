import { LoginFormData } from 'app/types';
import restService from './rest-service';

export const login = (data: LoginFormData) => restService.post('/tokens', data);
export const getServers = () => restService.get('/servers');
