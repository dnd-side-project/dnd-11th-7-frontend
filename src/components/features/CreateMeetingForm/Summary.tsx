import styled from '@emotion/styled';
import dayjs from 'dayjs';

import { Border } from '@/components/common/Border';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Chip } from '@/components/common/Chip';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Icon } from '@/components/common/Icon';
import { Body4, Head2 } from '@/components/common/Typography';
import { CATEGORY } from '@/constants/meetingForm';
import { MeetingForm } from '@/types/meeting';

import { CreateMeetingFormBaseProps } from './types';

type Props = {
  data: MeetingForm;
  isSubmitting: boolean;
} & CreateMeetingFormBaseProps;

export const Summary = ({ data, isSubmitting, onNext, onPrev }: Props) => {
  const {
    categoryIds,
    meetingName,
    meetingStartDate,
    meetingEndDate,
    dueDateTime,
    numberOfPeople,
    isAnonymous,
  } = data;

  return (
    <>
      <FormLayout
        header={<BlankSpace />}
        title={`모임 일정이 설정되었어요.\n이대로 일정을 생성할까요?`}
        content={
          <Card>
            <FlexBox flexDir="row" justifyContent="space-between" margin="0 0 27px 0">
              <FlexBox alignItems="normal" gap={12}>
                <Chip.Group>
                  {categoryIds.map((id) => (
                    <Chip>{CATEGORY[id]}</Chip>
                  ))}
                </Chip.Group>
                <Head2>{meetingName}</Head2>
                <Body4 regularWeight color="GY4">
                  {`${meetingStartDate} - ${meetingEndDate}`}
                </Body4>
              </FlexBox>
              <Icon name="jjakkak2" size={89} />
            </FlexBox>
            <Border borderStyle="dashed" color="GY5" />
            <GridBox>
              <Body4 color="purple">투표 마감</Body4>
              <Body4 color="GY2" regularWeight>
                {`${dayjs(dueDateTime).format('YYYY.MM.DD (dd) HH:mm 까지')}`}
              </Body4>

              <Body4 color="purple">리더</Body4>
              {/* TODO 닉네임 넣기 */}
              <Body4 color="GY2" regularWeight>
                나
              </Body4>

              <Body4 color="purple">참여 인원</Body4>
              <Body4 color="GY2" regularWeight>
                {`${numberOfPeople}명`}
              </Body4>

              <Body4 color="purple">익명 여부</Body4>
              <Body4 color="GY2" regularWeight>
                {isAnonymous ? '익명' : '실명'}
              </Body4>
            </GridBox>
          </Card>
        }
      />
      <FixedBottomButton
        left={
          <Button variant="tertiary" height="large" onClick={onPrev} disabled={isSubmitting}>
            돌아가기
          </Button>
        }
        right={
          <Button variant="primary" height="large" onClick={onNext} disabled={isSubmitting}>
            일정 생성하기
          </Button>
        }
      />
    </>
  );
};

const BlankSpace = styled.div`
  width: 100%;
  height: 52px;
`;

const GridBox = styled.div`
  // 필요 시 공통 컴포넌트화
  display: grid;
  grid-template-columns: 1fr 4fr;
  row-gap: 8px;
  margin-top: 27px;
`;
