/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from '@/components/common/AppLayout';
import { meetingStepNames } from '@/constants/meetingForm';
import { useFunnel } from '@/hooks/useFunnel';

import {
  AnonymousForm,
  CategoryForm,
  DeadlineForm,
  MeetingNameForm,
  MemberForm,
  PeriodForm,
} from '.';

const meta = {
  title: 'components/features/CreateMeetingForm',
  component: CategoryForm,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof CategoryForm>;

export default meta;
type Story = StoryObj<typeof CategoryForm>;

export const Basic: Story = {
  render: () => {
    const { Funnel, setStep } = useFunnel(meetingStepNames);

    return (
      <AppLayout>
        <Funnel>
          <Funnel.Step name="카테고리">
            <CategoryForm onPrev={() => {}} onNext={() => setStep('모임이름')} />
          </Funnel.Step>

          <Funnel.Step name="모임이름">
            <MeetingNameForm
              onPrev={() => setStep('카테고리')}
              onNext={() => setStep('일정수집기한')}
            />
          </Funnel.Step>

          <Funnel.Step name="일정수집기한">
            <PeriodForm onPrev={() => setStep('모임이름')} onNext={() => setStep('모임인원수')} />
          </Funnel.Step>

          <Funnel.Step name="모임인원수">
            <MemberForm onPrev={() => setStep('일정수집기한')} onNext={() => setStep('익명여부')} />
          </Funnel.Step>

          <Funnel.Step name="익명여부">
            <AnonymousForm
              onPrev={() => setStep('모임인원수')}
              onNext={() => setStep('일정입력마감기한')}
            />
          </Funnel.Step>

          <Funnel.Step name="일정입력마감기한">
            <DeadlineForm onPrev={() => setStep('익명여부')} onNext={() => {}} />
          </Funnel.Step>
        </Funnel>
      </AppLayout>
    );
  },
};
