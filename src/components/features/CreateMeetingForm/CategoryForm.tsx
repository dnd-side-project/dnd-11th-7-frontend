import { useState } from 'react';

import { Chip } from '@/components/common/Chip';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { categories } from '@/constants/meetingForm';
import { useFunnelProgressContext } from '@/hooks/useFunnelProgressContext';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

const MIN_SELECT_COUNT = 1;
const MAX_SELECT_COUNT = 3;

export const CategoryForm = ({ onNext, onPrev }: Props) => {
  const { progress, maxProgress } = useFunnelProgressContext();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const canClick = (chipValue: string) => {
    return (
      (!selectedCategory.includes(chipValue) && selectedCategory.length < MAX_SELECT_COUNT) ||
      (selectedCategory.includes(chipValue) && selectedCategory.length === MAX_SELECT_COUNT) ||
      selectedCategory.length < MAX_SELECT_COUNT
    );
  };

  const handleClickChip = (chipValue: string) => {
    if (!canClick(chipValue)) return;
    return selectedCategory.includes(chipValue)
      ? setSelectedCategory(selectedCategory.filter((selected) => selected !== chipValue))
      : setSelectedCategory([...selectedCategory, chipValue]);
  };

  return (
    <>
      <FormLayout
        header={<FormLayout.Header progress={progress} maxProgress={maxProgress} onPrev={onPrev} />}
        title={`카테고리를\n선택해 주세요`}
        description={`최대 ${MAX_SELECT_COUNT}개까지 선택할 수 있습니다.`}
        content={
          <FlexBox width="100%" padding="60px 60px 0">
            <Chip.Group>
              {categories.map((category) => (
                <Chip
                  key={category}
                  component="button"
                  variant={selectedCategory.includes(category) ? 'primary' : 'dimmed'}
                  onClick={() => handleClickChip(category)}
                  disabled={!canClick(category)}
                >
                  {category}
                </Chip>
              ))}
            </Chip.Group>
          </FlexBox>
        }
      />
      <FixedBottomButton
        disabled={selectedCategory.length < MIN_SELECT_COUNT}
        onClick={() => onNext(selectedCategory)}
      >
        다음
      </FixedBottomButton>
    </>
  );
};
