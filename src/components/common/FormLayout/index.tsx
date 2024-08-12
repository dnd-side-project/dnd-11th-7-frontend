import { css } from '@emotion/react';

import { Chip } from '@/components/common/Chip';
import { FlexBox } from '@/components/common/FlexBox';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Progress } from '@/components/common/Progress';
import { Caption, Head3 } from '@/components/common/Typography';

import { Props } from './FormLayout.types';

export const FormLayout = ({
  title,
  description,
  progressValue,
  progressMaxValue = 6,
  content,
}: Props) => {
  return (
    <FlexBox justifyContent="flex-start" height="100%">
      <Header
        left={<IconButton iconName="back" />}
        middle={<Progress min={0} max={progressMaxValue} value={progressValue} />}
        right={<Chip variant="greyFilled">{`${progressValue}/${progressMaxValue}`}</Chip>}
      />
      <FlexBox
        width="100%"
        alignItems="flex-start"
        gap={12}
        padding="20px 20px 100px 20px"
        css={css`
          overflow-y: scroll;
        `}
      >
        <Head3>{title}</Head3>
        <Caption regularWeight color="GY3">
          {description}
        </Caption>
        {content}
      </FlexBox>
    </FlexBox>
  );
};
