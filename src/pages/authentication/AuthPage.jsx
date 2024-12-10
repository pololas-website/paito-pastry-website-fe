import { Outlet, redirect } from 'react-router-dom';

function AuthPage() {
  return <Outlet />;
}

export default AuthPage;

export function loader() {
  const user = JSON.parse(localStorage.getItem('user'));

  return user ? redirect('/') : null;
}
