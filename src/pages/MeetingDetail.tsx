import { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { FlexBox } from '@/components/common/FlexBox';
import { ScheduleLayout } from '@/components/common/ScheduleLayout';
import { Body3 } from '@/components/common/Typography';
import { MeetingInfo } from '@/components/features/MeetingDetail/MeetingInfo';
import { MemberList } from '@/components/features/MeetingDetail/MemberList';
import { MemberScheduleCard } from '@/components/features/MeetingDetail/MemberScheduleCard';

export const MeetingDetail = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();

  if (uuid === undefined) {
    navigate('/');
    return null;
  }

  return (
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
    </ScheduleLayout>
  );
};
