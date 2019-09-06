import { LoginFormData } from 'app/types';
import restService from './rest-service';

export default {
    login: (data: LoginFormData) => restService.post('/tokens', data),
    getServers: () => restService.get('/servers'),
};
