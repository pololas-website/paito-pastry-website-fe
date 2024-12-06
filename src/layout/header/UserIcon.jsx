import { Button } from '../../components';
import { useUserContext } from '../../context/userContext';
import { logOut } from '../../firebase';

function UserIcon() {
  const { user } = useUserContext();

  const handleLogOut = () => logOut();

  if (!user) return null;

  return (
    <Button
      className="header__buy"
      rounded
      title="sign-out"
      onClick={handleLogOut}
    >
      <i className="fa-solid fa-user"></i>
    </Button>
  );
}

export default UserIcon;
