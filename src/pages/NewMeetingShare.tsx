import styled from '@emotion/styled';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Icon } from '@/components/common/Icon';
import { IconButton } from '@/components/common/IconButton';
import { useKakaoSdk } from '@/hooks/useKakaoSdk';
import { ENV } from '@/lib/env';
import { copyToClipboard } from '@/utils/copy';

export const NewMeetingShare = () => {
  useKakaoSdk();
  const navigate = useNavigate();
  const { state } = useLocation();
  const meetingUuid = state?.meetingUuid;

  if (Boolean(meetingUuid) === false) {
    return <Navigate to="/" />;
  }

  const shareUrl = ENV.IS_PRODUCTION
    ? `https://jjakkak.com/${meetingUuid}`
    : `http://localhost:5173/${meetingUuid}`;

  return (
    <>
      <FormLayout
        header={<BlankSpace />}
        title={`모임이 생성되었어요!\n링크를 공유하고, 모두가\n가능한 시간을 간편하게 모아보세요`}
        content={
          <FlexBox width="100%" alignItems="center" gap={48} margin="0 0 82px 0">
            <Icon name="jjakkak9WithStage" width="68%" height="100%" />
            <FlexBox flexDir="row" gap={28}>
              <IconButton
                variant="square"
                iconName="kakaotalk1"
                label="카카오톡"
                onClick={() => window.Kakao.Share.sendDefault(templateForShareMeeting(shareUrl))}
              />
              <IconButton
                variant="square"
                iconName="link"
                label="링크 복사"
                onClick={() => copyToClipboard(shareUrl)}
              />
            </FlexBox>
          </FlexBox>
        }
      />
      <FixedBottomButton
        left={
          <Button variant="secondary" height="large" onClick={() => navigate('/meeting')}>
            나의 모임 보기
          </Button>
        }
        right={
          <Button variant="primary" height="large" onClick={() => navigate(`/${meetingUuid}`)}>
            내 일정 입력하기
          </Button>
        }
      />
    </>
  );
};

const BlankSpace = styled.div`
  width: 100%;
  height: 52px;
`;

const templateForShareMeeting = (shareUrl: string) => ({
  objectType: 'feed',
  content: {
    title: '째깍 모임 링크가 도착했어요!',
    description: '나의 일정을 입력하고 모두가 가능한 시간을 확인해요.',
    imageUrl: 'https://ifh.cc/g/vK7L4P.jpg',
    link: {
      webUrl: shareUrl,
    },
  },
  buttons: [
    {
      title: '가능한 시간 입력하기',
      link: {
        webUrl: shareUrl,
      },
    },
  ],
});
