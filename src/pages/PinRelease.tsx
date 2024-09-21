import styled from '@emotion/styled';

import { AppLayout } from '@/components/common/AppLayout';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { IconButton } from '@/components/common/IconButton';
import { Head3 } from '@/components/common/Typography';

export const PinRelease = () => {
  return (
    <AppLayout>
      <FormLayout
        // TODO : 헤더 수정 필요
        header={<BlankSpace />}
        // TODO :  워딩 수정 필요
        title={`일정이 입력되었습니다.\n회원님의 식별자는 코드는\n다음과 같습니다.`}
        description="저장해두세요."
        content={
          <FlexBox width="100%" gap={100} padding="78px 0">
            <FlexBox padding="40px 0">
              <Head3>7ELEVE</Head3>
            </FlexBox>
            <FlexBox flexDir="row" gap={28} padding="50px 0 0 0">
              {/* TODO : 링크 공유 */}
              <IconButton
                variant="square"
                iconName="kakaotalk1"
                label="카카오톡"
                onClick={() => {}}
              />
              <IconButton variant="square" iconName="link" label="식별자 복사" onClick={() => {}} />
            </FlexBox>
          </FlexBox>
        }
      />
      {/* TODO : 임시 버튼 추가 추후 수정 필요 */}
      <FixedBottomButton>확인</FixedBottomButton>
    </AppLayout>
  );
};

const BlankSpace = styled.div`
  width: 100%;
  height: 52px;
`;
