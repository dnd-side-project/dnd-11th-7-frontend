import { StyledBorder } from './Border.styled';
import { Props } from './Border.types';

export const Border = ({ width = '100%', height = 1, color, borderStyle = 'solid' }: Props) => {
  return <StyledBorder width={width} height={height} color={color} borderStyle={borderStyle} />;
};
