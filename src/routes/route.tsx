import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/App';
import { Login } from '@/pages/Login';
import { LoginFailure } from '@/pages/LoginFailure';
import { LoginSuccess } from '@/pages/LoginSuccess';
import { NewMeeting } from '@/pages/NewMeeting';

import { PrivateRoute } from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        children: [
          { index: true, element: <Login /> },
          { path: 'success', element: <LoginSuccess /> },
          { path: 'failure', element: <LoginFailure /> },
        ],
      },
      {
        path: 'meeting',
        children: [
          {
            path: 'new',
            element: (
              <PrivateRoute>
                <NewMeeting />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);
