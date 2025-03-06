import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { LoginForm } from '@/components/ui/molecules/auth/LoginForm';

export default async function LoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('authToken');
  if (token) redirect('/dashboard');

  return (
    <div className="mx-auto max-w-md py-12">
      <h1 className="mb-6 text-2xl font-bold">Iniciar Sesión</h1>
      <LoginForm />
    </div>
  );
}
