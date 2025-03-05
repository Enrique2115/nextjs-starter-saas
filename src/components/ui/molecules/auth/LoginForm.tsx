'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/atoms/button';
import { Input } from '@/components/ui/atoms/input';
import { LoginDTO } from '@/modules/auth/types/auth.types';
import { useAuthStore } from '@/stores/auth.store';

import { Label } from '../../atoms/label';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTO>();
  const { login, loading, error } = useAuthStore();

  const onSubmit: SubmitHandler<LoginDTO> = async (data) => {
    await login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4"
    >
      {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

      <Label className="text-sm">Email</Label>
      <Input
        {...register('email', { required: 'Email is required' })}
        type="email"
      />

      {errors.email?.message && (
        <p className="text-red-500">{errors.email?.message}</p>
      )}

      <Label className="text-sm">Password</Label>
      <Input
        {...register('password', { required: 'Password is required' })}
        type="password"
      />

      {errors.password?.message && (
        <p className="text-red-500">{errors.password?.message}</p>
      )}

      <Button type="submit" variant="link" disabled={loading}>
        {loading ? 'Signing in...' : 'Sign In'}
      </Button>
    </form>
  );
};
