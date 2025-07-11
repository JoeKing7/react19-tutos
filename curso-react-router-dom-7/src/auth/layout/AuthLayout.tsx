import { Outlet } from 'react-router';
import { LoginPage } from './pages/LoginPage';

export const AuthLayout = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        {/* <LoginPage /> */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};
