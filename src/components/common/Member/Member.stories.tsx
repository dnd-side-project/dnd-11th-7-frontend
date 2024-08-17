/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { IconName } from '@/assets/icons';

import { Member } from '.';
import { FlexBox } from '../FlexBox';
import { Icon } from '../Icon';

const meta = {
  title: 'components/common/Member',
  component: Member,
  tags: ['autodocs'],
} satisfies Meta<typeof Member>;

export default meta;
type Story = StoryObj<typeof Member>;

export const Basic: Story = {
  args: {
    isData: true,
    isChecked: true,
    isLeader: false,
    isAnonymous: false,
    anonymousNumber: 1,
    iconName: 'jjakkak1',
    children: '리더',
  },
  render: (args) => {
    return (
      <FlexBox flexDir="row" flexWrap="wrap" justifyContent="flex-start" gap={10}>
        <Member {...args}>{args.children}</Member>
      </FlexBox>
    );
  },
};

const memberVariations: Array<{
  isData: boolean;
  isChecked?: boolean;
  isLeader?: boolean;
  emoji: IconName;
  name: string;
}> = [
  { isData: true, isLeader: true, emoji: 'jjakkak1', name: '리더' },
  { isData: true, emoji: 'jjakkak2', name: '승조' },
  { isData: true, emoji: 'jjakkak3', name: '태웅' },
  { isData: false, emoji: 'jjakkak4', name: '세빈' },
  { isData: false, emoji: 'jjakkak5', name: '지현' },
  { isData: false, emoji: 'jjakkak6', name: '채영' },
  { isData: false, emoji: 'jjakkak7', name: '노트북 두고 거제도 놀러간 경욱공주' },
];
export const Member_Display: Story = {
  render: () => {
    return (
      <FlexBox flexDir="row" flexWrap="wrap" justifyContent="flex-start" gap={10}>
        {memberVariations.map((member, index) => (
          <Member
            key={index}
            isData={member.isData}
            isChecked={member.isChecked}
            isLeader={member.isLeader}
            iconName={member.emoji}
          >
            {member.name}
          </Member>
        ))}
      </FlexBox>
    );
  },
};

const anonymousMemberVariations: Array<{
  isData: boolean;
  isChecked?: boolean;
  isAnonymous: boolean;
  isLeader?: boolean;
  emoji: IconName;
}> = [
  { isData: false, isLeader: true, isAnonymous: true, emoji: 'jjakkak1' },
  { isData: false, isChecked: true, isAnonymous: true, emoji: 'jjakkak2' },
  { isData: false, isAnonymous: true, emoji: 'jjakkak3' },
  { isData: false, isAnonymous: true, emoji: 'jjakkak4' },
  { isData: false, isAnonymous: true, emoji: 'jjakkak5' },
  { isData: false, isAnonymous: true, emoji: 'jjakkak6' },
  { isData: false, isAnonymous: true, emoji: 'jjakkak7' },
  { isData: false, isAnonymous: true, emoji: 'jjakkak8' },
  { isData: false, isAnonymous: true, emoji: 'jjakkak9' },
  { isData: false, isAnonymous: true, emoji: 'jjakkak10' },
];
export const Anonymous: Story = {
  render: () => {
    return (
      <FlexBox flexDir="row" flexWrap="wrap" justifyContent="flex-start" gap={10}>
        {anonymousMemberVariations.map((member, index) => (
          <Member
            key={index}
            isData={member.isData}
            isChecked={member.isChecked}
            isLeader={member.isLeader}
            isAnonymous={true}
            anonymousNumber={index + 1}
            iconName={member.emoji}
          />
        ))}
      </FlexBox>
    );
  },
};
