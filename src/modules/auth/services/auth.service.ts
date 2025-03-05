import axios from 'axios';

import { API_AUTH_URL } from '@/config';
import { encryptData } from '@/lib/security';

import { AuthResponse, LoginDTO } from '../types/auth.types';

const SESSION_COOKIE_NAME =
  process.env.SESSION_COOKIE_NAME || '__Secure-auth-token';

const api = axios.create({
  baseURL: API_AUTH_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => {
    if (response.data?.token) {
      const encryptedToken = encryptData(response.data.token);
      document.cookie = `${SESSION_COOKIE_NAME}=${encryptedToken}; Secure; SameSite=Strict; Path=/; Max-Age=${30 * 60}`;
    }
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      document.cookie = `${SESSION_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/;`;
    }
    return Promise.reject(error);
  },
);

export const AuthService = {
  async login(credentials: LoginDTO): Promise<AuthResponse> {
    const response = await api.post('/auth/login', credentials);
    return {
      user: response.data.user,
      roles: response.data.roles,
      refreshToken: response.data.refreshToken,
    };
  },

  async refreshToken(): Promise<string> {
    const response = await api.post('/auth/refresh');
    return response.data.token;
  },

  logout(): void {
    document.cookie = `${SESSION_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/;`;
  },
};
