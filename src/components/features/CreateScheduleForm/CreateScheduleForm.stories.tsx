/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { newScheduleStepNames } from '@/constants/scheduleFrom';
import { useFunnel } from '@/hooks/useFunnel';

import { NickNameForm } from './NickNameForm';
import { ScheduleInputForm } from './ScheduleInputForm';

import { AppLayout } from '../../common/AppLayout/index';

const meta = {
  title: 'components/features/CreateScheduleForm',
  component: NickNameForm,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof NickNameForm>;

export default meta;
type Story = StoryObj<typeof NickNameForm>;

export const Basic: Story = {
  render: () => {
    const { Funnel, setStep } = useFunnel(newScheduleStepNames);

    return (
      <AppLayout>
        <Funnel>
          <Funnel.Step name="닉네임설정">
            <NickNameForm
              onPrev={() => {}}
              onNext={() => setStep('일정입력')}
              value=""
              setValue={() => {}}
            />
          </Funnel.Step>

          <Funnel.Step name="일정입력">
            <ScheduleInputForm
              onPrev={() => setStep('닉네임설정')}
              onNext={() => {}}
              setValue={() => {}}
            />
          </Funnel.Step>
        </Funnel>
      </AppLayout>
    );
  },
};
