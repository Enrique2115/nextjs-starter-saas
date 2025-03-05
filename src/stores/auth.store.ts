import { create } from 'zustand';

import { AuthService } from '@/modules/auth/services/auth.service';
import { JwtPayload } from '@/modules/auth/types/auth.types';

interface AuthState {
  user: JwtPayload | null;
  loading: boolean;
  error: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (credentials) => {
    try {
      set({ loading: true, error: null });
      const { user, roles } = await AuthService.login(credentials);

      const jwtPayload: JwtPayload = {
        sub: user.id,
        email: user.email,
        roles,
        iat: Date.now() / 1000, // assuming iat is the current timestamp
        exp: Date.now() / 1000 + 3600, // assuming exp is 1 hour from now
      };

      set({
        user: jwtPayload,
        loading: false,
      });
    } catch (error) {
      set({
        error: `Authentication failed. Please check your credentials; ${error}`,
        loading: false,
      });
    }
  },

  logout: () => {
    AuthService.logout();
    set({ user: null });
  },
}));
