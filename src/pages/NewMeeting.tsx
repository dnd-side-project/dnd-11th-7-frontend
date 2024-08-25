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

export const NewMeeting = () => {
  const { Funnel, setStep } = useFunnel(meetingStepNames);

  return (
    <Funnel>
      <Funnel.Step name="카테고리">
        <CategoryForm
          onPrev={() => {
            /* TODO navigate */
          }}
          onNext={() => setStep('모임이름')}
        />
      </Funnel.Step>

      <Funnel.Step name="모임이름">
        <MeetingNameForm
          onPrev={() => setStep('카테고리')}
          onNext={() => setStep('일정수집기한')}
        />
      </Funnel.Step>

      <Funnel.Step name="일정수집기한">
        <MeetingDateRangeForm
          onPrev={() => setStep('모임이름')}
          onNext={() => setStep('모임인원수')}
        />
      </Funnel.Step>

      <Funnel.Step name="모임인원수">
        <MemberCountForm
          onPrev={() => setStep('일정수집기한')}
          onNext={() => setStep('익명여부')}
        />
      </Funnel.Step>

      <Funnel.Step name="익명여부">
        <AnonymousForm
          onPrev={() => setStep('모임인원수')}
          onNext={() => setStep('일정입력마감기한')}
        />
      </Funnel.Step>

      <Funnel.Step name="일정입력마감기한">
        <DueDateForm
          onPrev={() => setStep('익명여부')}
          onNext={() => {
            /* TODO navigate */
          }}
        />
      </Funnel.Step>
    </Funnel>
  );
};
