import { useState } from 'react';

import { newScheduleStepNames } from '@/constants/scheduleFrom';
import { useFunnel } from '@/hooks/useFunnel';
import { Schedule, newSchedule } from '@/types/schedule';

import { NickNameForm } from '../components/features/CreateScheduleForm/NickNameForm';
import { ScheduleInputForm } from '../components/features/CreateScheduleForm/ScheduleInputForm';

export const NewSchedule = () => {
  const { Funnel, setStep } = useFunnel(newScheduleStepNames);

  const [newSchedule, setNewSchedule] = useState<newSchedule>({
    dateOfScheduleList: [],
    nickName: '',
  });

  const updateSchedule = (key: keyof newSchedule, value: string | Schedule[]) => {
    setNewSchedule((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Funnel>
      <Funnel.Step name="닉네임설정">
        <NickNameForm
          // TODO : 일정 목록 페이지로 Navigate
          onPrev={() => {}}
          onNext={() => setStep('일정입력')}
          value={newSchedule.nickName}
          setValue={(value: string) => updateSchedule('nickName', value)}
        />
      </Funnel.Step>

      <Funnel.Step name="일정입력">
        <ScheduleInputForm
          onPrev={() => setStep('닉네임설정')}
          onNext={() => {}}
          setValue={(value: Schedule[]) => updateSchedule('dateOfScheduleList', value)}
        />
      </Funnel.Step>
    </Funnel>
  );
};
