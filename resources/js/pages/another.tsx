import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';

export default function Another() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="flex flex-col items-center gap-4">
        <Head title="Another" />

        <p>This is the Another page.</p>

        <Link href="/">
          <Button>Go to home</Button>
        </Link>
      </div>
    </div>
  );
}
