import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import MainLayout from './main';
import Header from './partials/header';

interface DashboardLayoutProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

export default function DashboardLayout({
  children,
  title,
  className,
}: DashboardLayoutProps) {
  return (
    <MainLayout title={title}>
      <Header />
      <main className={cn('p-8', className)}>{children}</main>
      <footer></footer>
    </MainLayout>
  );
}
