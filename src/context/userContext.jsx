import { useContext, createContext, useState, useEffect } from 'react';
import { onSignInStateChanged } from '../firebase';

const userContext = createContext(null);
export const useUserContext = () => useContext(userContext);

// TODO: Analize if this should be in a redux global state and migrate if needed.
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onSignInStateChanged((user) => {
      // TODO: with typescript this should be easy since types filter fields to the object.
      if (user) {
        const { accessToken, displayName, email, photoURL, phoneNumber, uid } =
          user;
        setUser({
          accessToken,
          displayName,
          email,
          photoURL,
          phoneNumber,
          uid,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}
