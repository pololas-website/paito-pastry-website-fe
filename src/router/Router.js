import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '../layout/mainLayout/MainLayout';
import { Cakes, SignUp, SignIn, Users } from '../pages';

import { action as signUpAction } from '../pages/authentication/SignUp';
import { action as signInAction } from '../pages/authentication/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Cakes />,
      },
      {
        path: 'signup',
        element: <SignUp />,
        action: signUpAction,
      },
      {
        path: 'signin',
        element: <SignIn />,
        action: signInAction,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
