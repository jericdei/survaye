import { usePage } from '@inertiajs/react';

export default function Login() {
  const { props } = usePage();

  return <div>Login: {props.auth.user?.email ?? 'No user'}</div>;
}
