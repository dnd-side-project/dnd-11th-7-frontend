import {
  CategoryForm,
  MeetingNameForm,
  AnonymousForm,
  DueDateForm,
  MemberCountForm,
  MeetingDateRangeForm,
} from '@/components/features/CreateMeetingForm';
import { meetingStepNames } from '@/constants/meetingForm';
import { useFunnel } from '@/hooks/useFunnel';
import { useMeetingFormState } from '@/hooks/useMeetingFormState';

export const NewMeeting = () => {
  const { Funnel, setStep } = useFunnel(meetingStepNames);
  const [formData, dispatch] = useMeetingFormState();

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
          onNext={() => {
            /* TODO navigate */
          }}
        />
      </Funnel.Step>
    </Funnel>
  );
};
