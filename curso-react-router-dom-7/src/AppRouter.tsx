import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { AuthLayout } from './auth/layout/AuthLayout';
import { LoginPage } from './auth/layout/pages/LoginPage';
import NotFoundPage from './notFound/NotFoundPage';
import { RegisterPage } from './auth/layout/pages/RegisterPage';

import { sleep } from './lib/sleep';
import { PrivateRoute } from './auth/components/PrivateRoute';
import { checkAuth } from './fake/fake-data';

const ChatLayout = lazy(async () => {
  await sleep(1500); // Simulate a delay for loading the ChatLayout
  return import('./chat/layout/ChatLayout');
});

const ChatPage = lazy(() => import('./chat/pages/ChatPage'));
const NoChatSelectedPage = lazy(
  () => import('./chat/pages/NoChatSelectedPage'),
);

export const AppRouter = () => {
  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      return checkAuth(token);
    },
    retry: 0,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-700">Loading...</p>
      </div>
    );
  }

  // if (isError) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
  //       <h1 className="text-2xl font-bold text-red-600">Error</h1>
  //       <p className="mt-2 text-gray-600">Failed to authenticate user.</p>
  //     </div>
  //   );
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="/auth/login" />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          {/* <Route path="/auth" element={<Navigate to="/auth/login" />}></Route> // otra forma de redirigir */}
        </Route>

        <Route
          path="/chat"
          element={
            <Suspense
              fallback={
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  <p className="mt-4 text-lg text-gray-700">Loading...</p>
                </div>
              }
            >
              <PrivateRoute
                isAuthenticated={!!userData} // !!userData es userData !== undefined
              >
                <ChatLayout />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route index element={<NoChatSelectedPage />} />
          <Route path="/chat/:clientId" element={<ChatPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
