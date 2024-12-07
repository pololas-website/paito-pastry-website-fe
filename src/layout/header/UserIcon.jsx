import { Button } from '../../components';

import { useUserContext } from '../../context/userContext';
import { logOut } from '../../firebase';

function UserIcon() {
  const { user } = useUserContext();

  return (
    <Button
      className="header__buy"
      icon
      rounded
      title="sign-out"
      onClick={() => logOut()}
    >
      {!user?.photoURL ? (
        <i className="fa-solid fa-user"></i>
      ) : (
        // TODO: Test with ah https when uploaded to firebase hosting
        //       And know exactly how the referrerPolicy works when fetching data.
        <img
          src={user.photoURL}
          alt="Profile photo"
          referrerPolicy="no-referrer"
        />
      )}
    </Button>
  );
}

export default UserIcon;
