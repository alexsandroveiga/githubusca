import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface IUser {
  login: string;
  name: string;
  avatar_url: string;
  location: string;
}

interface IUserContext {
  users: IUser[];
  addUser(item: IUser): Promise<void>;
  cleanStorage(): void;
}

const UserContext = createContext<IUserContext | null>(null);

const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function loadUsers(): Promise<void> {
      const storagedUsers = await AsyncStorage.getItem('@GITHUBusca:users');

      if (storagedUsers) {
        setUsers(JSON.parse(storagedUsers));
      }
    }

    loadUsers();
  }, []);

  const addUser = useCallback(
    async (user) => {
      const findUser = users.find((u) => u.login === user.login);

      if (findUser) {
        const userIndex = users.findIndex((u) => u.login === user.login);

        const usersList = users;

        usersList.splice(userIndex, 1);

        await AsyncStorage.setItem(
          '@GITHUBusca:users',
          JSON.stringify([user, ...usersList]),
        );

        setUsers([user, ...usersList]);
      } else {
        await AsyncStorage.setItem(
          '@GITHUBusca:users',
          JSON.stringify([user, ...users]),
        );
        setUsers([user, ...users]);
      }
    },
    [users],
  );

  const cleanStorage = useCallback(async () => {
    await AsyncStorage.removeItem('@GITHUBusca:users');
    setUsers([]);
  }, []);

  const value = React.useMemo(() => ({ addUser, cleanStorage, users }), [
    addUser,
    cleanStorage,
    users,
  ]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

function useUser(): IUserContext {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(`useUser must be used within a UserProvider`);
  }

  return context;
}

export { UserProvider, useUser };
