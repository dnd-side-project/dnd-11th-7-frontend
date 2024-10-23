import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

import { FlexBox } from '@/components/common/FlexBox';
import { ScheduleLayout } from '@/components/common/ScheduleLayout';
import { Body3 } from '@/components/common/Typography';
import { MeetingInfo } from '@/components/features/MeetingDetail/MeetingInfo';
import { MemberList } from '@/components/features/MeetingDetail/MemberList';
import { MemberScheduleCard } from '@/components/features/MeetingDetail/MemberScheduleCard';

export const MeetingDetail = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  if (uuid === undefined) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="jjakkak" />
        <meta property="og:title" content="째깍 모임 링크가 도착했어요!" />
        <meta
          property="og:description"
          content="나의 일정을 입력하고 모두가 가능한 시간을 확인해요."
        />
        <meta property="og:image" content="https://ifh.cc/g/38gbOb.jpg" />
      </Helmet>
      <ScheduleLayout>
        {/* TODO Suspense fallback */}
        <Suspense>
          <MeetingInfo uuid={uuid} />
        </Suspense>
        <Suspense>
          <MemberScheduleCard uuid={uuid} onNavigate={navigate} />
        </Suspense>
        <Suspense>
          <MemberList uuid={uuid} />
        </Suspense>
        {!accessToken && (
          <FlexBox padding="14px">
            <Body3
              regularWeight
              color="GY4"
              onClick={() => navigate(`/${uuid}/edit`)}
              style={{ cursor: 'pointer' }}
            >
              일정 수정하기
            </Body3>
          </FlexBox>
        )}
      </ScheduleLayout>
    </>
  );
};
