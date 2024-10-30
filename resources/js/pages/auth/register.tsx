import AuthLayout from '@/components/layouts/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Head, useForm } from '@inertiajs/react';

interface RegisterSchema {
  email: string;
}

export default function Register() {
  const form = useForm<RegisterSchema>({
    email: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    form.post(route('auth.register.store'));
  };

  return (
    <AuthLayout className="w-1/4 space-y-6">
      <Head title="Register" />

      <div className="space-y-4">
        <h1>Register for an account</h1>
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
