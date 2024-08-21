import {
  CategoryForm,
  MeetingNameForm,
  AnonymousForm,
  DeadlineForm,
  MemberForm,
  PeriodForm,
} from '@/components/features/CreateMeetingForm';
import { meetingStepNames } from '@/constants/meetingForm';
import { useFunnel } from '@/hooks/useFunnel';

export const NewMeeting = () => {
  const { Funnel, setStep } = useFunnel(meetingStepNames);

  return (
    <Funnel>
      <Funnel.Step name="카테고리">
        <CategoryForm
          onNext={() => setStep('모임이름')}
          onPrev={() => {
            /* TODO navigate */
          }}
        />
      </Funnel.Step>
      <Funnel.Step name="모임이름">
        <MeetingNameForm
          onNext={() => setStep('일정수집기한')}
          onPrev={() => setStep('카테고리')}
        />
      </Funnel.Step>
      <Funnel.Step name="일정수집기한">
        <PeriodForm onNext={() => setStep('모임인원수')} onPrev={() => setStep('모임이름')} />
      </Funnel.Step>
      <Funnel.Step name="모임인원수">
        <MemberForm onNext={() => setStep('익명여부')} onPrev={() => setStep('일정수집기한')} />
      </Funnel.Step>
      <Funnel.Step name="익명여부">
        <AnonymousForm
          onNext={() => setStep('일정입력마감기한')}
          onPrev={() => setStep('모임인원수')}
        />
      </Funnel.Step>
      <Funnel.Step name="일정입력마감기한">
        <DeadlineForm
          onNext={() => {
            /* TODO navigate */
          }}
          onPrev={() => setStep('익명여부')}
        />
      </Funnel.Step>
    </Funnel>
  );
};
