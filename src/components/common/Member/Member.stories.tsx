/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { IconName } from '@/assets/icons';

import { Member } from '.';
import { FlexBox } from '../FlexBox';

const meta = {
  title: 'components/common/Member',
  component: Member,
  tags: ['autodocs'],
} satisfies Meta<typeof Member>;

export default meta;
type Story = StoryObj<typeof Member>;

export const Basic: Story = {
  args: {
    isSubmitted: true,
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
  isSubmitted: boolean;
  isChecked?: boolean;
  isLeader?: boolean;
  emoji: IconName;
  name: string;
}> = [
  { isSubmitted: true, isLeader: true, emoji: 'jjakkak1', name: '리더' },
  { isSubmitted: true, emoji: 'jjakkak2', name: '승조' },
  { isSubmitted: true, emoji: 'jjakkak3', name: '태웅' },
  { isSubmitted: false, emoji: 'jjakkak4', name: '세빈' },
  { isSubmitted: false, emoji: 'jjakkak5', name: '지현' },
  { isSubmitted: false, emoji: 'jjakkak6', name: '채영' },
  { isSubmitted: false, emoji: 'jjakkak7', name: '노트북 두고 거제도 놀러간 경욱공주' },
];
export const Member_Display: Story = {
  render: () => {
    return (
      <FlexBox flexDir="row" flexWrap="wrap" justifyContent="flex-start" gap={10}>
        {memberVariations.map((member, index) => (
          <Member
            key={index}
            isSubmitted={member.isSubmitted}
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
  isSubmitted: boolean;
  isChecked?: boolean;
  isAnonymous: boolean;
  isLeader?: boolean;
  emoji: IconName;
}> = [
  { isSubmitted: false, isLeader: true, isAnonymous: true, emoji: 'jjakkak1' },
  { isSubmitted: false, isChecked: true, isAnonymous: true, emoji: 'jjakkak2' },
  { isSubmitted: false, isAnonymous: true, emoji: 'jjakkak3' },
  { isSubmitted: false, isAnonymous: true, emoji: 'jjakkak4' },
  { isSubmitted: false, isAnonymous: true, emoji: 'jjakkak5' },
  { isSubmitted: false, isAnonymous: true, emoji: 'jjakkak6' },
  { isSubmitted: false, isAnonymous: true, emoji: 'jjakkak7' },
  { isSubmitted: false, isAnonymous: true, emoji: 'jjakkak8' },
  { isSubmitted: false, isAnonymous: true, emoji: 'jjakkak9' },
  { isSubmitted: false, isAnonymous: true, emoji: 'jjakkak10' },
];
export const Anonymous: Story = {
  render: () => {
    return (
      <FlexBox flexDir="row" flexWrap="wrap" justifyContent="flex-start" gap={10}>
        {anonymousMemberVariations.map((member, index) => (
          <Member
            key={index}
            isSubmitted={member.isSubmitted}
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
