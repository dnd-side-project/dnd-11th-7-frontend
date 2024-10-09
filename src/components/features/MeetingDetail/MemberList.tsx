import { useSuspenseQuery } from '@tanstack/react-query';

import { queries } from '@/apis';
import { IconName } from '@/assets/icons';
import { Card } from '@/components/common/Card';
import { Chip } from '@/components/common/Chip';
import { FlexBox } from '@/components/common/FlexBox';
import { Member } from '@/components/common/Member';

import { UuidProps } from './MeetingDetail.type';

export const MemberList = ({ uuid }: UuidProps) => {
  const { data: memberData } = useSuspenseQuery(queries.meeting.participants(uuid));

  const leader = memberData.participantInfoList.find((member) => member.isLeader);
  const member = memberData.participantInfoList.filter((member) => !member.isLeader);

  const totalParticipant = leader ? [leader, ...member] : memberData.participantInfoList;

  return (
    <FlexBox width="100%" padding="0 20px">
      <Card>
        <FlexBox justifyContent="flex-start" alignItems="start" gap={10}>
          <Chip variant="primaryWeak" shape="rectangle">
            {memberData.isAnonymous ? '익명' : '실명'}
          </Chip>
          <FlexBox flexDir="row" flexWrap="wrap" justifyContent="flex-start" gap={10}>
            {totalParticipant.map((member, index) => (
              <Member
                key={index}
                isSubmitted={member.isAssigned}
                isLeader={member.isLeader}
                iconName={`jjakkak${index + 1}` as IconName}
              >
                {memberData.isAnonymous ? `멤버${index + 1}` : member.nickname}
              </Member>
            ))}
          </FlexBox>
        </FlexBox>
      </Card>
    </FlexBox>
  );
};
