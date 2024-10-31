import MainLayout from '@/components/layouts/main';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function AuthLayout({
  children,
  className,
  title,
}: PropsWithChildren<{ className?: string; title?: string }>) {
  return (
    <MainLayout title={title}>
      <main className="grid h-screen w-screen place-items-center">
        <div className={cn(className)}>{children}</div>
      </main>
    </MainLayout>
  );
}
