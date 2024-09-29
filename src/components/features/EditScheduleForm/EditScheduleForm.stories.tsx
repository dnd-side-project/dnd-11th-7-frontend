/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { editScheduleStepNames } from '@/constants/scheduleFrom';
import { useFunnel } from '@/hooks/useFunnel';
import { usePinState } from '@/hooks/usePinState';

import { EditScheduleInputForm } from './EditScheduleInputForm';
import { PinInputForm } from './PinInputForm';

import { AppLayout } from '../../common/AppLayout/index';

const meta = {
  title: 'components/features/EditScheduleForm',
  component: PinInputForm,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof PinInputForm>;

export default meta;
type Story = StoryObj<typeof PinInputForm>;

export const Basic: Story = {
  render: () => {
    const { Funnel, setStep } = useFunnel(editScheduleStepNames);
    const { pin, setPin } = usePinState();

    return (
      <AppLayout>
        <Funnel>
          <Funnel.Step name="식별자입력">
            <PinInputForm
              pin={pin}
              setPin={setPin}
              onPrev={() => {}}
              onNext={() => setStep('일정수정')}
            />
          </Funnel.Step>

          <Funnel.Step name="일정수정">
            <EditScheduleInputForm
              onPrev={() => setStep('식별자입력')}
              onNext={() => {}}
              setValue={() => {}}
            />
          </Funnel.Step>
        </Funnel>
      </AppLayout>
    );
  },
};
