import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/App';
import { Login } from '@/pages/Login';
import { NewMeeting } from '@/pages/NewMeeting';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'meeting',
        children: [
          {
            path: 'new',
            element: <NewMeeting />,
          },
        ],
      },
    ],
  },
]);
