import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { useAuthStore } from '@/stores/auth.store';

import { loginService, registerService } from '../services/auth.service';

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      useAuthStore.getState().setAuth(data.token, data.refreshToken, data.user);
      router.push('/dashboard');
    },
    onError: (error) => {
      toast.error('Credenciales incorrectas', { description: error.message });
    },
  });
};

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: registerService,
    onSuccess: (data) => {
      useAuthStore.getState().setAuth(data.token, data.refreshToken, data.user);
      router.push('/dashboard');
    },
    onError: (error) => {
      toast.error('Error al registrar', { description: error.message });
    },
  });
};
