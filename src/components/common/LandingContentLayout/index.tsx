import type { ComponentProps, ReactNode } from 'react';

import { FlexBox } from '@/components/common/FlexBox';
import { Body2 } from '@/components/common/Typography';
import { colors } from '@/styles/global';

type Props = {
  order: number;
  title: string;
  src: ReactNode;
};

export const LandingContentLayout = ({
  order,
  title,
  src,
  ...props
}: ComponentProps<'div'> & Props) => {
  return (
    <FlexBox
      height="100%"
      justifyContent="initial"
      padding="25% 0"
      style={{ minHeight: '100vh' }}
      {...props}
    >
      <FlexBox
        width="25px"
        height="25px"
        margin="0 0 12px 0"
        style={{
          borderRadius: 9999,
          backgroundColor: colors.WH,
          color: colors.purple,
          fontWeight: 800,
        }}
      >
        {order}
      </FlexBox>

      <Body2 color="WH" style={{ textAlign: 'center', lineHeight: 1.6 }}>
        {title}
      </Body2>

      {src}
    </FlexBox>
  );
};
