import { IconMap } from '@/assets/icons';
import { colors } from '@/styles/global';

import { Props } from './Icon.types';

export const Icon = ({ name, color = 'BK', size = 20, ...props }: Props) => {
  const IconSVGComponent = IconMap[name];
  const width = typeof size === 'number' ? size : size.width;
  const height = typeof size === 'number' ? size : size.height;

  return (
    <IconSVGComponent
      color={colors[color]}
      width={`${width}px`}
      height={`${height}px`}
      {...props}
    />
  );
};
