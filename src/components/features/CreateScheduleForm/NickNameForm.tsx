import { useState } from 'react';

import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { TextField } from '@/components/common/TextField';
import { createIsInvalidInstance, createIsValidInstance } from '@/utils/validation';

import { NickNameFormProps } from './types';

const MAX_NICKNAME_LENGTH = 10;

export const NickNameForm = ({ value, onNext }: NickNameFormProps) => {
  const [nickName, setNickName] = useState(value);
  const isFieldEmpty = nickName.length === 0;

  const validator = (value: string) => {
    if (value.length > MAX_NICKNAME_LENGTH) {
      return createIsInvalidInstance(`${MAX_NICKNAME_LENGTH}글자까지 입력 가능합니다.`);
    }
    return createIsValidInstance();
  };

  return (
    <>
      <FormLayout
        header={<Header left={<IconButton iconName="back" />} />}
        title={`닉네임을\n입력해 주세요`}
        description={`${MAX_NICKNAME_LENGTH}글자까지 입력 가능합니다.`}
        content={
          <FlexBox width="100%" height="100%" padding="60px 0 0 0" justifyContent="flex-start">
            <TextField
              placeholder="닉네임을 입력해 주세요"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              onClickClear={() => setNickName('')}
              validator={validator}
            />
          </FlexBox>
        }
      />
      <FixedBottomButton
        onClick={() => onNext()}
        disabled={isFieldEmpty || validator(nickName).isValid === false}
      >
        다음
      </FixedBottomButton>
    </>
  );
};
