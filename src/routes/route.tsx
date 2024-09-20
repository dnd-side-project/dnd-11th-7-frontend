import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/App';
import { LoginFailure } from '@/pages/LoginFailure';
import { LoginSuccess } from '@/pages/LoginSuccess';
import { NewMeeting } from '@/pages/NewMeeting';
import { NewMeetingShare } from '@/pages/NewMeetingShare';
import { Onboarding } from '@/pages/Onboarding';

import { PrivateRoute } from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Onboarding />,
      },
      {
        path: 'login',
        children: [
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
          {
            path: 'share',
            element: <NewMeetingShare />,
          },
        ],
      },
    ],
  },
]);
