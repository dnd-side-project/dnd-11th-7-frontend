import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { PinInput } from '@/components/common/PinInput';

import { PinProps } from './types';

export const PinInputForm = ({ pin, setPin, onPrev, onNext }: PinProps) => {
  // TODO : 식별자가 일치 하지 않을 경우 다음 페이지 이동 불가. message 보여주기
  const isPinComplete = pin.some((value) => value === '');
  return (
    <>
      <FormLayout
        header={<Header left={<IconButton iconName="back" onClick={onPrev} />} />}
        title={`여섯자리 식별자를\n입력해주세요`}
        description="영어와 숫자로 이루어진 6자리 식별자를 입력해주세요"
        content={
          <FlexBox width="100%" height="100%" padding="100px 0 0 0" justifyContent="flex-start">
            <PinInput value={pin} onPinChange={setPin} />
          </FlexBox>
        }
      />
      {/* TODO: 식별자가 존재하지 않을 경우 헬퍼 메시지 노출 + 다음 페이지 이동 불가 */}
      <FixedBottomButton onClick={onNext} disabled={isPinComplete}>
        다음
      </FixedBottomButton>
    </>
  );
};
