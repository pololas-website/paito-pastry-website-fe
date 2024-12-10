import { useContext, createContext, useState, useEffect } from 'react';
import { onSignInStateChanged } from '../firebase';

const intialUserValue = { user: null };
const userContext = createContext(intialUserValue);
export const useUserContext = () => useContext(userContext);

// TODO: Analize if this should be in a redux global state and migrate if needed.
export default function UserProvider({ children }) {
  const [user, setUser] = useState(intialUserValue);

  useEffect(() => {
    onSignInStateChanged((user) => {
      // TODO: with typescript this should be easy since types filter fields to the object.
      if (user) {
        const { accessToken, displayName, email, photoURL, phoneNumber, uid } =
          user;
        const basicUserData = {
          accessToken,
          displayName,
          email,
          photoURL,
          phoneNumber,
          uid,
        };
        setUser({ user: basicUserData });
        localStorage.setItem('user', JSON.stringify(basicUserData));
      } else {
        setUser(intialUserValue);
        localStorage.setItem('user', null);
      }
    });
  }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}
