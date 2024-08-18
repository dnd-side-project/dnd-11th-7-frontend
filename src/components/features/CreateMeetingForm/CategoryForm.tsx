import { useState } from 'react';
import { css } from '@emotion/react';

import { Chip } from '@/components/common/Chip';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Progress } from '@/components/common/Progress';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

const categories = ['학교', '친구', '팀플', '회의', '스터디', '취미', '봉사', '기타']; // TODO 임시 데이터
export const CategoryForm = ({ onNext, onPrev }: Props) => {
  const [selectedChip, setSelectedChip] = useState<string[]>([]); // TODO 임시 state

  return (
    <>
      <FormLayout
        header={
          <Header
            left={<IconButton iconName="back" onClick={onPrev} />}
            middle={<Progress min={0} max={6} value={1} />} // TODO 하드코딩 제거할 방법 고민
            right={<Chip variant="greyFilled">{`${1}/${6}`}</Chip>}
          />
        }
        title={`카테고리를\n선택해 주세요`}
        description="최대 3개까지 선택할 수 있습니다."
        content={
          <FlexBox width="100%" padding="60px 60px 0">
            <Chip.Group
              css={css`
                width: 60%;
              `}
            >
              {categories.map((category) => (
                <Chip
                  component="button"
                  variant={selectedChip.includes(category) ? 'filled' : 'dimmed'}
                  onClick={() => setSelectedChip((prev) => [...prev, category])}
                >
                  {category}
                </Chip>
              ))}
            </Chip.Group>
          </FlexBox>
        }
      />
      <FixedBottomButton onClick={onNext}>다음</FixedBottomButton>
    </>
  );
};
