// import { create } from 'zustand';

// import { AuthService } from '@/modules/auth/services/auth.service';
// import { JwtPayload } from '@/modules/auth/types/auth.types';

// interface AuthState {
//   user: JwtPayload | null;
//   loading: boolean;
//   error: string | null;
//   login: (credentials: { email: string; password: string }) => Promise<void>;
//   logout: () => void;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   user: null,
//   loading: false,
//   error: null,

//   login: async (credentials) => {
//     try {
//       set({ loading: true, error: null });
//       const { user, roles } = await AuthService.login(credentials);

//       const jwtPayload: JwtPayload = {
//         sub: user.id,
//         email: user.email,
//         roles,
//         iat: Date.now() / 1000, // assuming iat is the current timestamp
//         exp: Date.now() / 1000 + 3600, // assuming exp is 1 hour from now
//       };

//       set({
//         user: jwtPayload,
//         loading: false,
//       });
//     } catch (error) {
//       set({
//         error: `Authentication failed. Please check your credentials; ${error}`,
//         loading: false,
//       });
//     }
//   },

//   logout: () => {
//     AuthService.logout();
//     set({ user: null });
//   },
// }));

import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { create } from 'zustand';

import { AuthResponse } from '@/modules/auth/types/auth.types';

type AuthStore = {
  token: string | null;
  user: { email: string; name: string } | null;
  setAuth: (
    token: string,
    refreshToken: string,
    user: AuthResponse['user'],
  ) => void;
  clearAuth: () => void;
  initialize: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  user: null,
  setAuth: (token, refreshToken, user) => {
    setCookie('authToken', token, { maxAge: 86400 });
    setCookie('refreshToken', refreshToken, { maxAge: 86400 });
    set({ token, user });
  },
  clearAuth: () => {
    deleteCookie('authToken');
    deleteCookie('refreshToken');
    set({ token: null, user: null });
  },
  initialize: () => {
    const token = getCookie('authToken');
    set({ token: token?.toString() || null });
  },
}));
