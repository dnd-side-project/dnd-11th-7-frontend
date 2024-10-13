import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Navigate, useNavigate } from 'react-router-dom';

import { FixedBottomButton as FBB } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { Icon } from '@/components/common/Icon';
import { LandingContentLayout } from '@/components/common/LandingContentLayout';
import { Body1 } from '@/components/common/Typography';
import { useAuth } from '@/hooks/useAuth';
import { colors } from '@/styles/global';

/**
 * @description 랜딩 페이지는 로그인하지 않은 사용자에게만 보여짐
 */
export const Landing = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/meeting" />;
  }

  return (
    <FlexBox
      height="100%"
      justifyContent="initial"
      alignItems="center"
      style={{
        minHeight: '100vh',
        backgroundColor: colors.purple,
      }}
      padding="0 0 280px"
    >
      <FlexBox
        height="100%"
        justifyContent="initial"
        style={{ minHeight: '100vh', paddingBottom: '144px' }}
      >
        <FlexBox gap={13} margin="40% 0 28px">
          <Icon name="jjakkakText" color="WH" width={174} />
          <Body1 color="WH">째깍, 모두의 일정을 한 눈에</Body1>
        </FlexBox>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
          style={{ flexGrow: 1, alignContent: 'center' }}
        >
          <Icon name="jjakkaksIllust2" width={260} height={260} />
        </motion.div>
      </FlexBox>

      <LandingContentLayout
        order={1}
        title={`새로운 모임 일정을 만들고\n친구들과 함께 계획을 세워보세요`}
        src={<img src="/images/landing1.png" />}
      />
      <LandingContentLayout
        order={2}
        title={`일정을 입력하고\n모두가 가능한 시간을 확인해요`}
        src={<img src="/images/landing2.png" width={600} style={{ marginTop: '-35px' }} />}
      />
      <LandingContentLayout
        order={3}
        title={`째깍, 완벽한 시간이 도착했어요\n조율 결과를 한눈에 확인해요`}
        src={<img src="/images/landing3.png" width={228} style={{ marginTop: '30px' }} />}
      />

      <FlexBox height="100%" gap={13}>
        <Icon name="jjakkakText" color="WH" width={174} />
        <Body1 color="WH" style={{ textAlign: 'center', lineHeight: 1.6 }}>
          모두의 일정을 한 눈에,
          <br />
          째깍 시작하러 가볼까요?
        </Body1>
      </FlexBox>

      <FixedBottomButton onClick={() => navigate('/login')}>시작하기</FixedBottomButton>
    </FlexBox>
  );
};

const FixedBottomButton = styled(FBB)`
  position: sticky;
  background-color: ${colors.WH};
  color: ${colors.purple};
  font-weight: 800;

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:disabled) {
      background-color: ${colors.GY5};
      color: ${colors.purple};
    }
  }
`;
