import { Navigate } from 'react-router';

interface Props {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export const PrivateRoute = ({ isAuthenticated, children }: Props) => {
  return isAuthenticated ? children : <Navigate to="/auth"></Navigate>;
};
