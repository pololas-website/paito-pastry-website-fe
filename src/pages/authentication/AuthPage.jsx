import { Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';

function AuthElement() {
  const { user } = useUserContext();
  const navigate = useNavigate();

  if (user) navigate('/');

  return <Outlet />;
}

export default AuthElement;
