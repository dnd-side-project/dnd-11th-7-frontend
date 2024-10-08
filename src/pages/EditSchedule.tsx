import { Suspense, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import { queries } from '@/apis';
import { EditScheduleContent } from '@/components/features/EditScheduleForm/EditScheduleContent';
import { PinInputForm } from '@/components/features/EditScheduleForm/PinInputForm';
import { editScheduleStepNames } from '@/constants/scheduleForm';
import { useFunnel } from '@/hooks/useFunnel';
import { usePinState } from '@/hooks/usePinState';
import { Schedule } from '@/types/schedule';

export const EditSchedule = () => {
  const { uuid } = useParams();
  const { Funnel, setStep } = useFunnel(editScheduleStepNames);
  const { pin, setPin } = usePinState();

  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isPinSubmitted, setIsPinSubmitted] = useState(false);

  useEffect(() => {
    if (accessToken) {
      setStep('일정수정');
    }
  }, [accessToken, setStep]);

  const {
    data: scheduleData,
    refetch,
    isError,
    error,
  } = useQuery({
    ...(accessToken
      ? queries.schedule.member(uuid as string)
      : queries.schedule.guests(uuid as string, pin.join(''))),
    enabled: !!uuid && (!!accessToken || (pin.length == 6 && isPinSubmitted)),
    retry: false,
    refetchOnMount: true,
  });

  useEffect(() => {
    if (isError && isPinSubmitted) {
      setErrorMessage('PIN 번호가 일치하지 않습니다.');
      setIsPinSubmitted(false);
    } else if (!isError) {
      setErrorMessage('');
    }
  }, [isError, error, setStep, isPinSubmitted]);

  const handlePinSubmit = async () => {
    setIsPinSubmitted(true);
    const result = await refetch();
    if (!result.error) {
      setStep('일정수정');
    }
  };

  return (
    <Funnel>
      <Funnel.Step name="식별자입력">
        <PinInputForm
          pin={pin}
          setPin={setPin}
          message={errorMessage}
          onPrev={() => navigate(`/${uuid}`)}
          onNext={handlePinSubmit}
        />
      </Funnel.Step>

      <Funnel.Step name="일정수정">
        {/* // TODO : fallback 추가 */}
        <Suspense>
          <EditScheduleContent
            uuid={uuid as string}
            accessToken={accessToken}
            data={scheduleData?.dateOfScheduleList as Schedule[]}
            pin={pin}
            setStep={setStep}
            refetch={refetch}
            navigate={navigate}
          />
        </Suspense>
      </Funnel.Step>
    </Funnel>
  );
};
