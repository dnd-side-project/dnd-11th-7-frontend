import { Chip } from '@/components/common/Chip';
import { FlexBox } from '@/components/common/FlexBox';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Progress } from '@/components/common/Progress';
import { Caption, Head3 } from '@/components/common/Typography';

import { Props, HeaderProps } from './FormLayout.types';

export const FormLayout = ({ header, title, description, content }: Props) => {
  return (
    <FlexBox justifyContent="flex-start" height="100%" width="100%">
      {header}
      <FlexBox width="100%" alignItems="flex-start" gap={12} padding="20px">
        <Head3>{title}</Head3>
        <Caption regularWeight color="GY3">
          {description}
        </Caption>
        {content}
      </FlexBox>
    </FlexBox>
  );
};

const FormLayoutHeader = ({ progress, maxProgress, onPrev }: HeaderProps) => {
  return (
    <Header
      left={<IconButton iconName="back" onClick={onPrev} />}
      middle={<Progress min={0} max={maxProgress} value={progress} />}
      right={<Chip variant="grey">{`${progress}/${maxProgress}`}</Chip>}
    />
  );
};

FormLayout.Header = FormLayoutHeader;
