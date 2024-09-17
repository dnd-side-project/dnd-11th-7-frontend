import { Button } from '@/components/common/Button';
import { FlexBox } from '@/components/common/FlexBox';
import { Icon } from '@/components/common/Icon';
import { Head3 } from '@/components/common/Typography';
import { KakaoLoginButton } from '@/components/features/KakaoLoginButton';

export const Onboarding = () => {
  return (
    <FlexBox width="100%" height="100vh" padding="0 20px 82px">
      <FlexBox height="100%" gap={56}>
        <Icon name="jjakkakLogo1" size={136} />
        <Head3>{`모임의 시작을\n더욱 간편하게`}</Head3>
      </FlexBox>
      <FlexBox width="100%" gap={12}>
        <Button variant="tertiary" height="small">
          비회원으로 시작하기
        </Button>
        <KakaoLoginButton />
      </FlexBox>
    </FlexBox>
  );
};
