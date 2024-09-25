import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { mutations } from '@/apis';
import { Button } from '@/components/common/Button';
import { FlexBox } from '@/components/common/FlexBox';
import { Modal } from '@/components/common/Modal';
import { useModal } from '@/components/common/Modal/useModal';
import { Body2 } from '@/components/common/Typography';
import { newScheduleStepNames } from '@/constants/scheduleFrom';
import { useFunnel } from '@/hooks/useFunnel';
import { Schedule, newSchedule } from '@/types/schedule';

import { NickNameForm } from '../components/features/CreateScheduleForm/NickNameForm';
import { ScheduleInputForm } from '../components/features/CreateScheduleForm/ScheduleInputForm';

export const NewSchedule = () => {
  const { isOpen, openModal, closeModal, modalRef } = useModal();
  const { Funnel, step, setStep } = useFunnel(newScheduleStepNames);
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

  const handleSubmitMeeting = () => {
    if (!uuid) return;
    openModal();
  };

  const confirmSubmit = () => {
    if (!uuid) return;
    const data = accessToken ? schedule : { ...schedule, nickname: nickName };
    createScheduleMutation.mutate({ data, uuid });
    closeModal();
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
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title=""
        modalRef={modalRef}
        showCloseButton={true}
      >
        <FlexBox flexDir="column" gap={20}>
          <Body2>일정을 저장하시겠습니까?</Body2>
          <FlexBox width="100%" flexDir="row" gap={15}>
            <Button variant="secondary" height="small" onClick={closeModal}>
              취소
            </Button>
            <Button variant="primary" height="small" onClick={confirmSubmit}>
              확인
            </Button>
          </FlexBox>
        </FlexBox>
      </Modal>
    </>
  );
};
