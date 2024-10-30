import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function fallbackRenderer({ error }: { error: Error }) {
  return (
    <div className="grid h-screen w-screen place-items-center">
      Something went wrong: {error.message}
    </div>
  );
}

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary fallbackRender={fallbackRenderer}>{children}</ErrorBoundary>
  );
}
