import { PropsWithChildren } from 'react';
import MainLayout from './main';
import Header from './partials/header';

interface DashboardLayoutProps extends PropsWithChildren {
  title?: string;
}

export default function DashboardLayout({
  children,
  title,
}: DashboardLayoutProps) {
  return (
    <MainLayout title={title}>
      <Header />
      <main className="p-8">{children}</main>
      <footer></footer>
    </MainLayout>
  );
}
