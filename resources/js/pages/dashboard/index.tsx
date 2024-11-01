import DashboardLayout from '@/components/layouts/dashboard';
import { usePage } from '@inertiajs/react';

export default function Dashboard() {
  const { props } = usePage();

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-4">
        <p>Dashboard: {props.auth.user?.email}</p>
      </div>
    </DashboardLayout>
  );
}
