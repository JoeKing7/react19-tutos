import { Navigate, redirect } from 'react-router';
import type { Route } from './dashboard/+types/home';

export function meta({}) {
  return [
    { title: 'Learning' },
    { name: 'description', content: 'Learning by myself' },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  // This loader function can be used to check if the user is authenticated
  // and redirect them accordingly. For now, it just returns nothing.
  // You can implement your authentication logic here.
  // For example, you might check a session or token.
  const token = request.headers.get('Authorization') || '';
  if (token) {
    // If the user is authenticated, redirect to the home page
    return redirect('/home');
  }
  // If not authenticated, redirect to the login page
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/auth/login',
    },
  });
}

export default function Home() {
  return <Navigate to="/auth/login"></Navigate>;
}
