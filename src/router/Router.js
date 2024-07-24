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

function Router({ children }) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}

export default Router;
