import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { type NavigateFunction } from 'react-router-dom';

import { mutations, queries } from '@/apis';
import { Button } from '@/components/common/Button';
import { FlexBox } from '@/components/common/FlexBox';
import { Modal } from '@/components/common/Modal';
import { useModal } from '@/components/common/Modal/useModal';
import { Body2 } from '@/components/common/Typography';
import { scheduleModalNavigateNames } from '@/constants/scheduleForm';
import { Schedule } from '@/types/schedule';

import { ScheduleInputForm } from '../CreateScheduleForm/ScheduleInputForm';

export type editScheduleContentProps = {
  uuid: string;
  accessToken?: string | null;
  pin: string[];
  setStep: (step: '식별자입력' | '일정수정') => void;
  navigate: NavigateFunction;
};

export const EditScheduleContent = ({
  uuid,
  accessToken,
  pin,
  setStep,
  navigate,
}: editScheduleContentProps) => {
  const { data: scheduleData, refetch } = useQuery({
    ...(accessToken
      ? queries.schedule.member(uuid as string)
      : queries.schedule.guests(uuid as string, pin.join(''))),
    enabled: !!accessToken,
    refetchOnMount: true,
  });

  // TODO : 데이터가 없는데 일정 수정에 들어온 경우 메인 페이지로 redirect
  if (scheduleData?.dateOfScheduleList.length === 0) {
    navigate(`/${uuid}`);
  }

  const [editSchedule, setEditSchedule] = useState<{ dateOfScheduleList: Schedule[] }>();
  const { isOpen, openModal, closeModal, modalRef } = useModal();

  const updateSchedule = (value: Schedule[]) => {
    setEditSchedule({ dateOfScheduleList: value });
  };

  const editScheduleMutation = useMutation({
    mutationFn: (data: { dateOfScheduleList: Schedule[] }) => {
      return accessToken
        ? mutations.memberSchedule.editMemberSchedule.mutationFn(data, uuid)
        : mutations.nonMemberSchedule.editNonMemberSchedule.mutationFn(data, uuid, pin.join(''));
    },
    onSuccess: () => {
      refetch();
      openModal();
    },
  });

  const handleSubmitMeeting = () => {
    if (!uuid || !editSchedule) return;
    editScheduleMutation.mutate(editSchedule);
    openModal();
  };

  const handelNavigateResultOrHome = (value: string) => {
    closeModal();
    if (value === scheduleModalNavigateNames.HOME) {
      navigate(`/${uuid}`);
    }
    navigate(`/${uuid}/schedules`);
  };

  return (
    <>
      {scheduleData?.dateOfScheduleList && (
        <ScheduleInputForm
          uuid={uuid}
          edit={true}
          dateOfScheduleList={scheduleData?.dateOfScheduleList}
          onPrev={() => (accessToken ? navigate(`/${uuid}`) : setStep('식별자입력'))}
          onNext={handleSubmitMeeting}
          setValue={updateSchedule}
        />
      )}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title=""
        modalRef={modalRef}
        showCloseButton={true}
      >
        <FlexBox flexDir="column" gap={20}>
          <Body2>째깍! 일정 수정이 완료되었어요.</Body2>
          <FlexBox width="100%" flexDir="row" gap={15}>
            <Button
              variant="tertiary"
              height="small"
              onClick={() => handelNavigateResultOrHome(scheduleModalNavigateNames.HOME)}
            >
              {scheduleModalNavigateNames.HOME}
            </Button>
            <Button
              variant="primary"
              height="small"
              onClick={() => handelNavigateResultOrHome(scheduleModalNavigateNames.RESULT)}
            >
              {scheduleModalNavigateNames.RESULT}
            </Button>
          </FlexBox>
        </FlexBox>
      </Modal>
    </>
  );
};
