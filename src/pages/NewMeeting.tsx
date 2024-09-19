import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { mutations } from '@/apis';
import {
  MeetingNameForm,
  AnonymousForm,
  DueDateForm,
  MemberCountForm,
  MeetingDateRangeForm,
  CategoryForm,
} from '@/components/features/CreateMeetingForm';
import { Summary } from '@/components/features/CreateMeetingForm/Summary';
import { meetingStepNames } from '@/constants/meetingForm';
import { useFunnel } from '@/hooks/useFunnel';
import { useMeetingFormState } from '@/hooks/useMeetingFormState';

export const NewMeeting = () => {
  const { Funnel, setStep } = useFunnel(meetingStepNames);
  const [formData, dispatch] = useMeetingFormState();

  const navigate = useNavigate();
  const { mutateAsync: createMeeting, isPending: isSubmitting } = useMutation({
    ...mutations.meeting.createMeeting,
    onSuccess: ({ meetingUuid }) => {
      navigate('/meeting/share', { state: { meetingUuid } });
    },
  });

  const handleSubmitMeeting = async () => {
    await createMeeting(formData);
  };

  return (
    <Funnel>
      <Funnel.Step name="카테고리">
        <CategoryForm
          context={{
            state: formData.categoryIds,
            setState: (categoryIds) => {
              dispatch({ type: 'categoryIds', payload: { ...formData, categoryIds } });
            },
          }}
          onPrev={() => {
            /* TODO navigate */
          }}
          onNext={() => setStep('모임이름')}
        />
      </Funnel.Step>

      <Funnel.Step name="모임이름">
        <MeetingNameForm
          context={{
            state: formData.meetingName,
            setState: (meetingName) => {
              dispatch({ type: 'meetingName', payload: { ...formData, meetingName } });
            },
          }}
          onPrev={() => setStep('카테고리')}
          onNext={() => setStep('일정수집기한')}
        />
      </Funnel.Step>

      <Funnel.Step name="일정수집기한">
        <MeetingDateRangeForm
          context={{
            state: {
              meetingStartDate: formData.meetingStartDate,
              meetingEndDate: formData.meetingEndDate,
            },
            setState: (meetingDates) => {
              dispatch({ type: 'meetingDate', payload: { ...formData, ...meetingDates } });
            },
          }}
          onPrev={() => setStep('모임이름')}
          onNext={() => setStep('모임인원수')}
        />
      </Funnel.Step>

      <Funnel.Step name="모임인원수">
        <MemberCountForm
          context={{
            state: formData.numberOfPeople,
            setState: (numberOfPeople) =>
              dispatch({ type: 'numberOfPeople', payload: { ...formData, numberOfPeople } }),
          }}
          onPrev={() => setStep('일정수집기한')}
          onNext={() => setStep('익명여부')}
        />
      </Funnel.Step>

      <Funnel.Step name="익명여부">
        <AnonymousForm
          context={{
            state: formData.isAnonymous,
            setState: (isAnonymous) =>
              dispatch({ type: 'isAnonymous', payload: { ...formData, isAnonymous } }),
          }}
          onPrev={() => setStep('모임인원수')}
          onNext={() => setStep('일정입력마감기한')}
        />
      </Funnel.Step>

      <Funnel.Step name="일정입력마감기한">
        <DueDateForm
          context={{
            state: formData.dueDateTime,
            setState: (dueDateTime) =>
              dispatch({
                type: 'dueDateTime',
                payload: { ...formData, dueDateTime },
              }),
            others: formData.meetingStartDate,
          }}
          onPrev={() => setStep('익명여부')}
          onNext={() => setStep('입력확인')}
        />
      </Funnel.Step>

      <Funnel.Step name="입력확인">
        <Summary
          data={formData}
          isSubmitting={isSubmitting}
          onPrev={() => setStep('일정입력마감기한')}
          onNext={handleSubmitMeeting}
        />
      </Funnel.Step>
    </Funnel>
  );
};
