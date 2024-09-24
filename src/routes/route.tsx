import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/App';
import { EditSchedule } from '@/pages/EditSchedule';
import { meetingLoader } from '@/pages/loaders/meetingLoader';
import { LoginFailure } from '@/pages/LoginFailure';
import { LoginSuccess } from '@/pages/LoginSuccess';
import { Meeting } from '@/pages/Meeting';
import { MeetingDetail } from '@/pages/MeetingDetail';
import { NewMeeting } from '@/pages/NewMeeting';
import { NewMeetingShare } from '@/pages/NewMeetingShare';
import { NewSchedule } from '@/pages/NewSchedule';
import { Onboarding } from '@/pages/Onboarding';
import { PinRelease } from '@/pages/PinRelease';
import { TimeCollection } from '@/pages/TimeCollection';
import { TotalSchedule } from '@/pages/TotalSchedule';

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
            index: true,
            loader: meetingLoader,
            element: (
              <PrivateRoute>
                <Meeting />
              </PrivateRoute>
            ),
          },
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
      {
        path: '/:uuid',
        children: [
          {
            index: true,
            element: <MeetingDetail />,
          },
          {
            path: 'new',
            element: <NewSchedule />,
          },
          {
            path: 'edit',
            element: <EditSchedule />,
          },
          {
            path: 'share',
            element: <PinRelease />,
          },
          {
            path: 'totalTime',
            element: <TotalSchedule />,
          },
          { path: 'result', element: <TimeCollection /> },
        ],
      },
    ],
  },
]);
