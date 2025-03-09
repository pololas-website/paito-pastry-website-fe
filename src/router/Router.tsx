import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '../layout/mainLayout/MainLayout';
import { Cakes, SignUp, SignIn, Users, AuthPage } from '../pages';

import { loader as authLoader } from '../pages/authentication/AuthPage';

import { action as signUpAction } from '../pages/authentication/SignUp';
import { action as signInAction } from '../pages/authentication/signIn/SignIn';

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
        path: 'users',
        element: <Users />,
      },
      {
        element: <AuthPage />,
        loader: authLoader,
        children: [
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
        ],
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
