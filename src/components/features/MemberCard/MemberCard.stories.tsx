/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from '@/components/common/AppLayout';
import { FlexBox } from '@/components/common/FlexBox';
import { Member } from '@/components/common/Member';

import { MemberCard } from '.';

const meta = {
  title: 'components/features/MemberCard',
  component: MemberCard,
  tags: ['autodocs'],
} satisfies Meta<typeof MemberCard>;
export default meta;
type Story = StoryObj<typeof MemberCard>;

export const Basic: Story = {
  render: () => {
    return (
      <FlexBox justifyContent="center" alignItems="center" height="100vh">
        {/* TODO : Card 컴포넌트 자식으로 MemberCard가 존재해야 함 */}
        <MemberCard>
          <FlexBox
            flexDir="row"
            justifyContent="center"
            alignItems="center"
            gap={10}
            flexWrap="wrap"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <Member isSubmitted={true} iconName="jjakkak1" isChecked={false}>
                {`승조 ${index}`}
              </Member>
            ))}
          </FlexBox>
        </MemberCard>
      </FlexBox>
    );
  },
};
