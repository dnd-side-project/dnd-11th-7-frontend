import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { mutations } from '@/apis';
import { Button } from '@/components/common/Button';
import { FlexBox } from '@/components/common/FlexBox';
import { Modal } from '@/components/common/Modal';
import { useModal } from '@/components/common/Modal/useModal';
import { Body2 } from '@/components/common/Typography';
import { newScheduleStepNames, scheduleModalNavigateNames } from '@/constants/scheduleForm';
import { useFunnel } from '@/hooks/useFunnel';
import { Schedule, newSchedule } from '@/types/schedule';

import { NickNameForm } from '../components/features/CreateScheduleForm/NickNameForm';
import { ScheduleInputForm } from '../components/features/CreateScheduleForm/ScheduleInputForm';

export const NewSchedule = () => {
  const { isOpen, openModal, closeModal, modalRef } = useModal();
  const { Funnel, setStep } = useFunnel(newScheduleStepNames);
  const { uuid } = useParams();
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('accessToken');

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
    mutationFn: (data: newSchedule) => {
      const mutationFn = accessToken
        ? mutations.memberSchedule.createMemberSchedule.mutationFn
        : mutations.nonMemberSchedule.createNonMemberSchedule.mutationFn;

      return mutationFn(data, uuid as string);
    },
    onSuccess: ({ scheduleUuid }) => {
      accessToken ? openModal() : navigate(`/${uuid}/share`, { state: { scheduleUuid } });
    },
  });

  const handleSubmitMeeting = () => {
    if (!uuid) return;
    const data = accessToken ? schedule : { ...schedule, nickname: nickName };
    createScheduleMutation.mutate(data);
  };

  const handelNavigateResultOrEdit = (value: string) => {
    if (!uuid) return;
    closeModal();
    if (value == scheduleModalNavigateNames.RESULT) {
      return navigate(`/${uuid}/schedules`);
    }
    return navigate(`/${uuid}/edit`);
  };

  return (
    <>
      <Funnel>
        <Funnel.Step name="닉네임설정">
          <NickNameForm
            onPrev={() => navigate(`/${uuid}`)}
            onNext={() => setStep('일정입력')}
            value={nickName}
            setValue={(value: string) => setNickName(value)}
          />
        </Funnel.Step>

        <Funnel.Step name="일정입력">
          <ScheduleInputForm
            uuid={uuid as string}
            edit={false}
            onPrev={() => (accessToken ? navigate(`/${uuid}`) : setStep('닉네임설정'))}
            onNext={handleSubmitMeeting}
            setValue={(value: Schedule[]) => updateDateOfScheduleList(value)}
          />
        </Funnel.Step>
      </Funnel>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title=""
        modalRef={modalRef}
        showCloseButton={true}
      >
        <FlexBox flexDir="column" gap={20}>
          <Body2>쨰깍! 일정이 생성되었어요!</Body2>
          <FlexBox width="100%" flexDir="row" gap={15}>
            <Button
              variant="tertiary"
              height="small"
              onClick={() => handelNavigateResultOrEdit(scheduleModalNavigateNames.EDIT)}
            >
              {scheduleModalNavigateNames.EDIT}
            </Button>
            <Button
              variant="primary"
              height="small"
              onClick={() => handelNavigateResultOrEdit(scheduleModalNavigateNames.RESULT)}
            >
              {scheduleModalNavigateNames.RESULT}
            </Button>
          </FlexBox>
        </FlexBox>
      </Modal>
    </>
  );
};
