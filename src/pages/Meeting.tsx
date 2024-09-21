import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FloatingActionButton } from '@/components/common/FloatingActionButton';
import { Header } from '@/components/common/Header';
import { Icon } from '@/components/common/Icon';
import { MeetingList } from '@/components/features/MeetingList';

export const Meeting = () => {
  const isDataEmpty = [].length === 0; // TODO data

  return (
    <>
      <Header left={<Icon name="jjakkakText" size={{ width: 115, height: 13 }} color="BK" />} />
      <MeetingList title="나의 모임" data={[]} />
      {isDataEmpty ? (
        <FixedBottomButton>모임 일정 생성하기</FixedBottomButton>
      ) : (
        <FloatingActionButton />
      )}
    </>
  );
};
