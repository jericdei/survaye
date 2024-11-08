import Error from '@/components/error';
import AuthLayout from '@/components/layouts/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

interface ValidateSchema {
  email: string;
  code: string;
}

export default function Validate() {
  const [resent, setResent] = useState(false);

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
    <AuthLayout title="Validate Email" className="w-1/4 space-y-6">
      <h1>Validate Email Address</h1>

      <p>
        Enter the code sent to <u>{email}</u>
      </p>

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

        <div>
          <p>
            Didn&apos;t receive the code?{' '}
            <Link
              as="button"
              className="underline"
              method="post"
              data={{ email, resend: true }}
              href={route('auth.login')}
              onSuccess={() => setResent(true)}
            >
              Resend
            </Link>
          </p>
        </div>

        {resent && <p className="text-green-400">Code resent!</p>}

        <Button>Continue</Button>
      </form>
    </AuthLayout>
  );
}
