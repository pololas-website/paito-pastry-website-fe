import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Cakes, SignUp, Users } from '../pages';
import MainLayout from '../layout/mainLayout/MainLayout';

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
