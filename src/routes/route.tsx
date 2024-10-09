import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/App';
import { EditSchedule } from '@/pages/EditSchedule';
import { Landing } from '@/pages/Landing';
import { Login } from '@/pages/Login';
import { LoginFailure } from '@/pages/LoginFailure';
import { LoginSuccess } from '@/pages/LoginSuccess';
import { Meeting } from '@/pages/Meeting';
import { MeetingDetail } from '@/pages/MeetingDetail';
import { NewMeeting } from '@/pages/NewMeeting';
import { NewMeetingShare } from '@/pages/NewMeetingShare';
import { NewSchedule } from '@/pages/NewSchedule';
import { NotFound } from '@/pages/NotFound';
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
        element: <Landing />,
      },
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
            index: true,
            // loader: meetingLoader, FIXME: 로그인하지 않은 경우 권한을 필요로하는 로더 동작 불가능하므로 제거하기
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
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <MeetingDetail />,
          },
          {
            path: 'new',
            element: (
              <PrivateRoute>
                <NewSchedule />
              </PrivateRoute>
            ),
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
            path: 'schedules',
            element: <TotalSchedule />,
          },
          {
            path: 'schedules/overview',
            element: <TimeCollection />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
