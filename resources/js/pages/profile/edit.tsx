import Input from '@/components/form/input';
import DashboardLayout from '@/components/layouts/dashboard';
import { Button } from '@/components/ui/button';
import { router, useForm, usePage } from '@inertiajs/react';

interface ProfileUpdateProps {
  name: string;
  email: string;
}

export default function ProfileUpdate() {
  const { props } = usePage();

  const form = useForm<ProfileUpdateProps>({
    name: props.auth.user?.name || '',
    email: props.auth.user?.email || '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    form.post(route('profile.update'), {
      onSuccess: () => router.get(route('dashboard.index')),
    });
  };

  return (
    <DashboardLayout title="Profile" className="p-16">
      <h1>Complete your profile</h1>

      <form onSubmit={handleSubmit}>
        <div className="mt-8 w-1/4 space-y-4">
          <Input
            name="name"
            value={form.data.name}
            placeholder="Name"
            error={form.errors.name}
            onChange={(e) => form.setData('name', e.target.value)}
          />

          <Input
            name="email"
            value={form.data.email}
            placeholder="Email"
            error={form.errors.email}
            onChange={(e) => form.setData('email', e.target.value)}
          />

          <Button className="w-full">Save</Button>
        </div>
      </form>
    </DashboardLayout>
  );
}
