import { useContext, createContext, useState, useEffect } from 'react';
import { onSignInStateChanged } from '../firebase';
import { User } from '../firebase';

interface IUserContext {
  user: User | null;
}

const intialUserValue: IUserContext = { user: null };
const userContext = createContext(intialUserValue);
export const useUserContext = () => useContext(userContext);

// TODO: Analize if this should be in a redux global state and migrate if needed.
export default function UserProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [user, setUser] = useState(intialUserValue);

  useEffect(() => {
    onSignInStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser({ user });
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        setUser(intialUserValue);
        localStorage.setItem('user', 'null');
      }
    });
  }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}
