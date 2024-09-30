import { Suspense, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { EditScheduleContent } from '@/components/features/EditScheduleForm/EditScheduleContent';
import { PinInputForm } from '@/components/features/EditScheduleForm/PinInputForm';
import { editScheduleStepNames } from '@/constants/scheduleForm';
import { useFunnel } from '@/hooks/useFunnel';
import { usePinState } from '@/hooks/usePinState';

export const EditSchedule = () => {
  const { uuid } = useParams();
  const { Funnel, setStep } = useFunnel(editScheduleStepNames);

  const { pin, setPin } = usePinState();

  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (accessToken) {
      setStep('일정수정');
    }
  }, [accessToken, setStep]);

  const handlePinSubmit = async () => {
    const pinString = pin.join('');
    if (pinString.length === 6) {
      setStep('일정수정');
    }
  };

  return (
    <Funnel>
      <Funnel.Step name="식별자입력">
        <PinInputForm
          pin={pin}
          setPin={setPin}
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
            pin={pin}
            setStep={setStep}
            navigate={navigate}
          />
        </Suspense>
      </Funnel.Step>
    </Funnel>
  );
};
