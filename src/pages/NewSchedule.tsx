import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { mutations } from '@/apis';
import { newScheduleStepNames } from '@/constants/scheduleFrom';
import { useFunnel } from '@/hooks/useFunnel';
import { Schedule, newSchedule } from '@/types/schedule';

import { NickNameForm } from '../components/features/CreateScheduleForm/NickNameForm';
import { ScheduleInputForm } from '../components/features/CreateScheduleForm/ScheduleInputForm';

type MutationParams = { data: newSchedule; uuid: string };

export const NewSchedule = () => {
  const accessToken = localStorage.getItem('accessToken');
  const { uuid } = useParams();

  const navigate = useNavigate();
  const { Funnel, step, setStep } = useFunnel(newScheduleStepNames);

  useEffect(() => {
    if (accessToken) {
      setStep('일정입력');
    }
  }, [accessToken, setStep]);

  const [nickName, setNickName] = useState('');
  const [schedule, setSchedule] = useState<newSchedule>({
    dateOfScheduleList: [],
  });

  const updateDateOfScheduleList = (value: Schedule[]) => {
    setSchedule((prev) => ({ ...prev, dateOfScheduleList: value }));
  };

  const createScheduleMutation = useMutation({
    mutationFn: async ({ data, uuid }: { data: newSchedule; uuid: string }) => {
      if (accessToken) {
        return mutations.memberSchedule.createMemberSchedule.mutationFn(data, uuid);
      } else {
        return mutations.nonMemberSchedule.createNonMemberSchedule.mutationFn(data, uuid);
      }
    },
    onSuccess: ({ scheduleUuid }) => {
      navigate(`/${uuid}/share`, { state: { scheduleUuid } });
    },
  });

  const handleSubmitMeeting = async () => {
    if (!uuid) return;

    const data = accessToken ? schedule : { ...schedule, nickname: nickName };
    createScheduleMutation.mutate({ data, uuid });
  };

  return (
    <Funnel>
      <Funnel.Step name="닉네임설정">
        {!accessToken && (
          <NickNameForm
            onPrev={() => navigate(`/${uuid}`)}
            onNext={() => setStep('일정입력')}
            value={nickName}
            setValue={(value: string) => setNickName(value)}
          />
        )}
      </Funnel.Step>

      <Funnel.Step name="일정입력">
        {step === '일정입력' && (
          <ScheduleInputForm
            uuid={uuid as string}
            onPrev={() => {
              if (!accessToken) {
                setStep('닉네임설정');
              } else if (accessToken) {
                navigate(`/${uuid}`);
              }
            }}
            onNext={handleSubmitMeeting}
            setValue={(value: Schedule[]) => updateDateOfScheduleList(value)}
          />
        )}
      </Funnel.Step>
    </Funnel>
  );
};
