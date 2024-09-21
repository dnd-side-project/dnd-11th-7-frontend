import styled from '@emotion/styled';
import dayjs from 'dayjs';

import { Border } from '@/components/common/Border';
import { Card } from '@/components/common/Card';
import { Chip } from '@/components/common/Chip';
import { FlexBox } from '@/components/common/FlexBox';
import { Icon } from '@/components/common/Icon';
import { Head3, Body4, Body2, Head4 } from '@/components/common/Typography';
import { Meeting } from '@/types/meeting';
import { isPastDate } from '@/utils/isPastDate';

type Props = { title?: string; data: Meeting[] };

export const MeetingList = ({ title, data }: Props) => {
  return (
    <FlexBox alignItems="normal" padding="15px 20px" gap={17}>
      <Head4>{title}</Head4>
      {data.length > 0 ? (
        data.map((meeting) => (
          <Card>
            <FlexBox flexDir="row" justifyContent="space-between" margin="0 0 10px 0">
              <FlexBox alignItems="normal" gap={7}>
                <Chip.Group>
                  {meeting.categoryNames.map((category) => (
                    <Chip
                      key={category}
                      variant={isPastDate(meeting.dueDateTime) ? 'greyWeak' : 'primaryWeak'}
                    >
                      {category}
                    </Chip>
                  ))}
                </Chip.Group>
                <Head3 color={isPastDate(meeting.dueDateTime) ? 'GY4' : 'BK'}>
                  {meeting.meetingName}
                </Head3>
                <Body4 regularWeight color="GY4">
                  {`${dayjs(meeting.meetingStartDate).format('YYYY. MM. DD(dd)')} - ${dayjs(meeting.meetingEndDate).format('YYYY. MM. DD(dd)')}`}
                </Body4>
              </FlexBox>
              <Icon
                // TODO get랜덤이미지
                name="jjakkak1"
                size={72}
                color={isPastDate(meeting.dueDateTime) ? 'GY5' : 'purple'}
              />
            </FlexBox>
            <Border borderStyle="dashed" color="GY5" />
            {isPastDate(meeting.dueDateTime) ? (
              <Body4 style={{ marginTop: '10px' }} regularWeight color="GY4">
                일정 입력이 마감된 모임이에요
              </Body4>
            ) : (
              <GridBox>
                <Body4 color="purple">일정 입력 마감</Body4>
                <Body4 color="GY2" regularWeight>
                  {`${dayjs(meeting.dueDateTime).format('YYYY.MM.DD (dd) HH:mm 까지')}`}
                </Body4>
              </GridBox>
            )}
          </Card>
        ))
      ) : (
        <Card emojiPosition="top-left" style={{ marginTop: '56px' }}>
          <FlexBox padding="24px">
            <Body2
              style={{ textAlign: 'center' }}
            >{`아직 확정된 모임 일정이 없어요\n모임을 생성해 주세요`}</Body2>
          </FlexBox>
        </Card>
      )}
    </FlexBox>
  );
};

const GridBox = styled.div`
  // 필요 시 공통 컴포넌트화
  display: grid;
  grid-template-columns: 1fr 3fr;
  row-gap: 8px;
  margin-top: 10px;
`;
