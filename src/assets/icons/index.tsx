import Anonymous from './anonymous.svg?react';
import Back from './back.svg?react';
import Jjakkak1 from './jjakkak-1.svg?react';
import Jjakkak10 from './jjakkak-10.svg?react';
import Jjakkak2 from './jjakkak-2.svg?react';
import Jjakkak3 from './jjakkak-3.svg?react';
import Jjakkak4 from './jjakkak-4.svg?react';
import Jjakkak5 from './jjakkak-5.svg?react';
import Jjakkak6 from './jjakkak-6.svg?react';
import Jjakkak7 from './jjakkak-7.svg?react';
import Jjakkak8 from './jjakkak-8.svg?react';
import Jjakkak9 from './jjakkak-9.svg?react';
import JjakkakCircle1 from './jjakkak-circle-1.svg?react';
import JjakkakCircle2 from './jjakkak-circle-2.svg?react';
import JjakkakFill1 from './jjakkak-fill-1.svg?react';
import JjakkakFill10 from './jjakkak-fill-10.svg?react';
import JjakkakFill2 from './jjakkak-fill-2.svg?react';
import JjakkakFill3 from './jjakkak-fill-3.svg?react';
import JjakkakFill4 from './jjakkak-fill-4.svg?react';
import JjakkakFill5 from './jjakkak-fill-5.svg?react';
import JjakkakFill6 from './jjakkak-fill-6.svg?react';
import JjakkakFill7 from './jjakkak-fill-7.svg?react';
import JjakkakFill8 from './jjakkak-fill-8.svg?react';
import JjakkakFill9 from './jjakkak-fill-9.svg?react';
import JjakkakGray3 from './jjakkak-gray-3.svg?react';
import JjakkakIllust from './jjakkak-illust.svg?react';
import JjakkakText from './jjakkak-text.svg?react';
import JjakkaksIllust from './jjakkaks-illust.svg?react';
import Kakaotalk1 from './kakaotalk-1.svg?react';
import Kakaotalk2 from './kakaotalk-2.svg?react';
import Left from './left.svg?react';
import Link from './link.svg?react';
import Right from './right.svg?react';
import User from './user.svg?react';

export const IconMap = {
  /* 기본 아이콘 */
  anonymous: Anonymous,
  back: Back,
  kakaotalk1: Kakaotalk1,
  kakaotalk2: Kakaotalk2,
  left: Left,
  link: Link,
  right: Right,
  user: User,
  /* 째깍이 */
  jjakkak1: Jjakkak1,
  jjakkak2: Jjakkak2,
  jjakkak3: Jjakkak3,
  jjakkak4: Jjakkak4,
  jjakkak5: Jjakkak5,
  jjakkak6: Jjakkak6,
  jjakkak7: Jjakkak7,
  jjakkak8: Jjakkak8,
  jjakkak9: Jjakkak9,
  jjakkak10: Jjakkak10,
  jjakkakFill1: JjakkakFill1,
  jjakkakFill2: JjakkakFill2,
  jjakkakFill3: JjakkakFill3,
  jjakkakFill4: JjakkakFill4,
  jjakkakFill5: JjakkakFill5,
  jjakkakFill6: JjakkakFill6,
  jjakkakFill7: JjakkakFill7,
  jjakkakFill8: JjakkakFill8,
  jjakkakFill9: JjakkakFill9,
  jjakkakFill10: JjakkakFill10,
  jjakkakIllust: JjakkakIllust,
  jjakkaksIllust: JjakkaksIllust,
  jjakkakCircle1: JjakkakCircle1,
  JjakkakCircle2: JjakkakCircle2,
  JjakkakText: JjakkakText,
  jjakkakGray3: JjakkakGray3,
};

export type IconName = keyof typeof IconMap;
export const iconNames = Object.keys(IconMap) as IconName[];