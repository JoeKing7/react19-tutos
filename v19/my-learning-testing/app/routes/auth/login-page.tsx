import {
  Form,
  redirect,
  useFetcher,
  useNavigate,
  useNavigation,
} from 'react-router';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import type { Route } from './+types/login-page';
import PasswordInput from '~/components/password-input';
import { commitSession, getSession } from '~/sessions.server';

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  console.log('Session:', session.get('token'));

  if (session.get('token')) {
    return redirect('/home');
  }
}

export async function action({ request }: Route.ActionArgs) {
  const loginRes = await fetch(
    'https://mocki.io/v1/541231fa-263a-4806-9b51-db6317c1a9eb',
  );
  const loginData = await loginRes.json();
  console.log('Login Data:', loginData);
  const session = await getSession(request.headers.get('Cookie'));
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  // Here you would typically handle the login logic, such as validating credentials
  // and setting a session or token. For now, we'll just log the values.
  console.log('Email:', email);
  console.log('Password:', password);

  session.set('token', 'dummy-token'); // Set a dummy token for demonstration purposes
  const cookie = await commitSession(session, {
    // path: '/',
    // // secure: true,
    // httpOnly: true,
    // sameSite: 'lax',
  });
  console.log('Cookie:', cookie);

  // Simulate a successful login by redirecting to the home page
  return redirect('/home', {
    headers: {
      // 'Set-Cookie': `token2=your_token_here; Path=/; HttpOnly; SameSite=Lax`,
      'Set-Cookie': cookie,
    },
  });
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

const LoginPage = ({ actionData }: Route.ComponentProps) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const fetcher = useFetcher();

  // if (localStorage.getItem('token')) {
  //   // If the user is already logged in, redirect to the dashboard
  //   navigate('/home', { replace: true });
  //   return; // Prevent rendering the login form
  // }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <fetcher.Form method="post">
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <PasswordInput name="password"></PasswordInput>
                  </div>
                  <Button
                    type="submit"
                    disabled={fetcher.state !== 'idle'}
                    className="w-full"
                  >
                    {fetcher.state !== 'idle' ? 'Loading...' : 'Login'}
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{' '}
                  <a href="#" className="underline underline-offset-4">
                    Sign up
                  </a>
                </div>
              </fetcher.Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
