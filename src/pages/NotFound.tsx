import { useNavigate } from 'react-router-dom';

import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { Icon } from '@/components/common/Icon';
import { IconButton } from '@/components/common/IconButton';
import { Body4, Head3 } from '@/components/common/Typography';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <FormLayout
        title=""
        header={
          <Header
            left={<IconButton iconName="jjakkakText" size={130} onClick={() => navigate('/')} />}
          />
        }
        content={
          <FlexBox width="100%" padding="150px 60px" gap={10}>
            <Icon name="jjakkakCry" size={200} />
            <Head3>앗! 오류가 발생했습니다.</Head3>
            <Body4 regularWeight color="GY4">
              잠시후 다시 시도해주세요.
            </Body4>
          </FlexBox>
        }
      />
      <FixedBottomButton
        onClick={() => {
          navigate('/');
        }}
      >
        돌아가기
      </FixedBottomButton>
    </>
  );
};
