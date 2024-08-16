import { FlexBox } from '@/components/common/FlexBox';
import { Caption, Head3 } from '@/components/common/Typography';

import { Props } from './FormLayout.types';

export const FormLayout = ({ header, title, description, content }: Props) => {
  return (
    <FlexBox justifyContent="flex-start" height="100%" width="100%">
      {header}
      <FlexBox width="100%" alignItems="flex-start" gap={12} padding="20px 20px 100px 20px">
        <Head3>{title}</Head3>
        <Caption regularWeight color="GY3">
          {description}
        </Caption>
        {content}
      </FlexBox>
    </FlexBox>
  );
};
