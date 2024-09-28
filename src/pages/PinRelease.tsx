import styled from '@emotion/styled';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

import { Card } from '@/components/common/Card';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { IconButton } from '@/components/common/IconButton';
import { Head3 } from '@/components/common/Typography';

export const PinRelease = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const nonMemberScheduleUuid = state?.scheduleUuid;

  if (!nonMemberScheduleUuid) {
    return <Navigate to={`/${uuid}`} />;
  }

  return (
    <>
      <FormLayout
        header={<BlankSpace />}
        title={`입장 코드가 생성되었습니다.\n사용할 수 있도록 저장해 주세요.`}
        description="일정을 수정할때 필요합니다. 코드를 꼭 저장해주세요!"
        content={
          <FlexBox width="100%" gap={100} padding="78px 0">
            <FlexBox width="100%" padding="20px 0" alignItems="center" justifyContent="center">
              <Card>
                <FlexBox padding="20px 0 ">
                  <Head3>{nonMemberScheduleUuid}</Head3>
                </FlexBox>
              </Card>
            </FlexBox>
            <FlexBox flexDir="row" gap={28} padding="50px 0 0 0">
              {/* TODO : 링크 공유 */}
              <IconButton
                variant="square"
                iconName="kakaotalk1"
                label="카카오톡"
                onClick={() => {}}
              />
              <IconButton variant="square" iconName="copy" label="코드 복사" onClick={() => {}} />
            </FlexBox>
          </FlexBox>
        }
      />
      <FixedBottomButton onClick={() => navigate(`/${uuid}`)}>결과 보러가기</FixedBottomButton>
    </>
  );
};

const BlankSpace = styled.div`
  width: 100%;
  height: 52px;
`;
