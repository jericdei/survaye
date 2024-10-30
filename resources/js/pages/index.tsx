import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';

export default function Index() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="flex flex-col items-center gap-4">
        <Head title="Index" />

        <p>This is the Index page.</p>

        <Link href="/another">
          <Button>Go to another</Button>
        </Link>
      </div>
    </div>
  );
}
