import styled from '@emotion/styled';
import { Navigate, useLocation } from 'react-router-dom';

import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Icon } from '@/components/common/Icon';
import { IconButton } from '@/components/common/IconButton';

export const NewMeetingShare = () => {
  const { state } = useLocation();
  const meetingUuid = state?.meetingUuid;

  if (Boolean(meetingUuid) === false) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <FormLayout
        header={<BlankSpace />}
        title={`링크를 공유하고, 모두가\n가능한 시간을 간편하게 확인하세요`}
        content={
          <FlexBox width="100%" alignItems="center" gap={48} margin="0 0 82px 0">
            <Icon name="jjakkak9WithStage" width="68%" height="100%" />
            <FlexBox flexDir="row" gap={28}>
              <IconButton
                variant="square"
                iconName="kakaotalk1"
                label="카카오톡"
                onClick={() => {
                  /*TOOD */
                }}
              />
              <IconButton
                variant="square"
                iconName="link"
                label="링크 복사"
                onClick={() => {
                  /*TOOD */
                }}
              />
            </FlexBox>
          </FlexBox>
        }
      />
      <FixedBottomButton>완료</FixedBottomButton>
    </>
  );
};

const BlankSpace = styled.div`
  width: 100%;
  height: 52px;
`;
