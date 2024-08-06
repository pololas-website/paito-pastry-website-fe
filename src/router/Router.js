import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '../layout/mainLayout/MainLayout';
import { Cakes, SignUp, Users } from '../pages';

import { action as signUpAction } from '../pages/signUp/SignUp';

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
