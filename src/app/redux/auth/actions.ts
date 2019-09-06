import { LoginFormData } from 'app/types';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from './constants';

export const loginRequest = (formData: LoginFormData) => ({ type: LOGIN_REQUEST, formData });
export const logoutRequest = () => ({ type: LOGOUT_REQUEST });
