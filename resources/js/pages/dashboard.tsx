import MainLayout from '@/components/layouts/main';
import { Button } from '@/components/ui/button';
import { router, usePage } from '@inertiajs/react';

export default function Dashboard() {
  const { props } = usePage();

  return (
    <MainLayout title="Dashboard">
      <div className="space-y-4 p-8">
        <p>Dashboard: {props.auth.user?.email}</p>

        <Button onClick={() => router.post(route('auth.logout'))}>
          Logout
        </Button>
      </div>
    </MainLayout>
  );
}
