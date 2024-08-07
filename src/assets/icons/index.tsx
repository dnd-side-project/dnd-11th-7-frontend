import Back from './back.svg?react';
import Kakaotalk from './kakaotalk.svg?react';
import Left from './left.svg?react';
import Link from './link.svg?react';
import Right from './right.svg?react';
import User from './user.svg?react';

export const IconMap = {
  back: Back,
  kakaotalk: Kakaotalk,
  left: Left,
  link: Link,
  right: Right,
  user: User,
};

export type IconName = keyof typeof IconMap;
export const iconNames = Object.keys(IconMap) as IconName[];
