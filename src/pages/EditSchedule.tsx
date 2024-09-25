import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { PinInputForm } from '@/components/features/EditScheduleForm/PinInputForm';
import { editScheduleStepNames } from '@/constants/scheduleFrom';
import { useFunnel } from '@/hooks/useFunnel';
import { Schedule } from '@/types/schedule';

import { ScheduleInputForm } from '../components/features/CreateScheduleForm/ScheduleInputForm';

export const EditSchedule = () => {
  const { uuid } = useParams();
  const { Funnel, setStep } = useFunnel(editScheduleStepNames);

  const [, setEditSchedule] = useState<Schedule[]>();

  const updateSchedule = (value: Schedule[]) => {
    setEditSchedule(value);
  };

  return (
    <Funnel>
      <Funnel.Step name="식별자입력">
        <PinInputForm
          // TODO : 일정 목록 페이지로 Navigate
          onPrev={() => {}}
          onNext={() => setStep('일정수정')}
        />
      </Funnel.Step>

      <Funnel.Step name="일정수정">
        <ScheduleInputForm
          uuid={uuid as string}
          onPrev={() => setStep('식별자입력')}
          // TODO : 일정 목록 페이지로 Navigate
          onNext={() => {}}
          setValue={updateSchedule}
        />
      </Funnel.Step>
    </Funnel>
  );
};
