import { createContext, useState, useCallback, type ReactNode } from 'react';

interface UserContextType {
  name: string;
  isLogged: boolean;
  updateUser: (user: { name: string; isLogged: boolean }) => void;
}

export const UserContext = createContext<UserContextType>({
  name: '',
  isLogged: false,
  updateUser: () => {},
});

export function UserContextProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const [name, setName] = useState<string>('');
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const updateUser = useCallback(
    ({ name, isLogged }: { name: string; isLogged: boolean }) => {
      setName(name);
      setIsLogged(isLogged);
    },
    [],
  );

  return (
    <UserContext.Provider value={{ name, isLogged, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
