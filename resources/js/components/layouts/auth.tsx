import MainLayout from '@/components/layouts/main';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function AuthLayout({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <MainLayout>
      <main className="grid h-screen w-screen place-items-center">
        <div className={cn(className)}>{children}</div>
      </main>
    </MainLayout>
  );
}
