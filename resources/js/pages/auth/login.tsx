import AuthLayout from '@/components/layouts/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from '@inertiajs/react';

interface LoginSchema {
  email: string;
}

export default function Login() {
  const form = useForm<LoginSchema>({
    email: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    form.post(route('auth.login.store'));
  };

  return (
    <AuthLayout title="Login" className="w-1/4 space-y-6">
      <div className="space-y-4">
        <h1>Login/Sign Up</h1>
        <p>Enter your email address to continue.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <label htmlFor="email">
          <Input
            className={form.errors.email ? 'border-red-700' : ''}
            placeholder="Email"
            type="email"
            name="email"
            value={form.data.email}
            onChange={(e) => form.setData('email', e.target.value)}
          />

          <small className="text-red-700">{form.errors.email}</small>
        </label>

        <Button>Continue</Button>
      </form>
    </AuthLayout>
  );
}
