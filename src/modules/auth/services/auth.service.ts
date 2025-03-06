import axiosInstance from '@/lib/axios';

import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from '../types/auth.types';

export const loginService = async (
  payload: LoginPayload,
): Promise<AuthResponse> => {
  const { data } = await axiosInstance.post<AuthResponse>(
    '/auth/login',
    payload,
  );
  return data;
};

export const registerService = async (
  payload: RegisterPayload,
): Promise<AuthResponse> => {
  const { data } = await axiosInstance.post<AuthResponse>(
    '/auth/register',
    payload,
  );
  return data;
};

export const logoutService = async (): Promise<void> => {
  await axiosInstance.post('/auth/logout');
};
