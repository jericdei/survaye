import Error from '@/components/error';
import AuthLayout from '@/components/layouts/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Head, useForm } from '@inertiajs/react';

interface ValidateSchema {
  email: string;
  code: string;
}

export default function Validate() {
  const params = new URLSearchParams(window.location.search);
  const email = params.get('email');

  if (!email) {
    return <Error message="Email not provided!" />;
  }

  const form = useForm<ValidateSchema>({
    email,
    code: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    form.post(route('auth.validate.store'));
  };

  return (
    <AuthLayout className="w-1/4 space-y-6">
      <Head title="Validate" />

      <h2>
        Enter the code sent to <u>{email}</u>
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <label htmlFor="code">
          <Input
            className={form.errors.email ? 'border-red-700' : ''}
            placeholder="Verification code"
            name="code"
            value={form.data.code}
            onChange={(e) => form.setData('code', e.target.value)}
          />

          <small className="text-red-700">{form.errors.code}</small>
        </label>

        <Button>Continue</Button>
      </form>
    </AuthLayout>
  );
}
