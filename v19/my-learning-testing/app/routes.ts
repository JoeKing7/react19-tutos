import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  index('./routes/home.tsx'),

  ...prefix('auth', [
    layout('./routes/auth/layout.tsx', [
      route('login', './routes/auth/login-page.tsx'),
      route('register', './routes/auth/register-page.tsx'),
      route('reset', './routes/auth/reset-password-page.tsx'),
    ]),
  ]),

  layout('./routes/dashboard/layout-dashboard.tsx', [
    route('home', './routes/dashboard/home.tsx'),
    route('zustan-bears', './routes/dashboard/zustan-bears.tsx'),
  ]),
  route('*', './routes/catchall.tsx'), // catcall route,
] satisfies RouteConfig;
