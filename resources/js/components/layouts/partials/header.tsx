import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent } from '@/components/ui/popover';
import { links } from '@/constants/links';
import { cn, getUserInitials } from '@/lib/utils';
import { Link, router, usePage } from '@inertiajs/react';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { PopoverTrigger } from '@radix-ui/react-popover';

export default function Header() {
  const { pathname } = window.location;

  const { props } = usePage();

  return (
    <header className="max-w-screen flex items-center justify-between p-8">
      <div className="flex items-center gap-16">
        <div>
          <Link href={route('dashboard.index')}>
            <p className="cursor-pointer text-3xl font-bold">Survaye</p>
          </Link>
        </div>

        <nav>
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className={cn(
                    'hover:underline',
                    pathname.startsWith(link.href) ? 'font-bold' : '',
                  )}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Button>New Survey</Button>

        <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarFallback className="flex aspect-square cursor-pointer items-center justify-center rounded-full bg-indigo-400 font-semibold">
                {getUserInitials(props.auth.user?.name || '')}
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>

          <PopoverContent align="end" sideOffset={10}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center">
                <p className="font-semibold">{props.auth.user?.name}</p>
                <small>{props.auth.user?.email}</small>
              </div>

              <Button onClick={() => router.post(route('auth.logout'))}>
                Logout
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
