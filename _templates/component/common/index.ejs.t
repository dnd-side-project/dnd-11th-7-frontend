---
to: src/components/common/<%= h.changeCase.pascal(component) %>/index.tsx
---
import { Props } from './<%= h.changeCase.pascal(component) %>.types';

export const <%= h.changeCase.pascal(component) %> = ({}: Props) => {
  return <></>;
};
