import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Cakes, SignUp, Users } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Cakes />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/users',
    element: <Users />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
