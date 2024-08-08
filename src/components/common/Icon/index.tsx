import { IconMap } from '@/assets/icons';
import { colors } from '@/styles/global';

import { Props } from './Icon.types';

export const Icon = ({ name, color = 'BK', size = 20, ...props }: Props) => {
  const IconSVGComponent = IconMap[name];
  const pxSize = `${size}px`;

  return <IconSVGComponent color={colors[color]} width={pxSize} height={pxSize} {...props} />;
};
