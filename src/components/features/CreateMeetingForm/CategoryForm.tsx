import { useState } from 'react';

import { Chip } from '@/components/common/Chip';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { categories, categoryIdMap } from '@/constants/meetingForm';
import { useMeetingFormProgressContext } from '@/hooks/useMeetingFormProgressContext';
import { MeetingForm } from '@/types/meeting';

import { CreateMeetingFormBaseProps, FormData } from './types';

type Props<T> = CreateMeetingFormBaseProps & FormData<T>;

const MIN_SELECT_COUNT = 1;
const MAX_SELECT_COUNT = 3;

export const CategoryForm = ({ context, onNext, onPrev }: Props<MeetingForm['categoryIds']>) => {
  const { progress, maxProgress } = useMeetingFormProgressContext();
  const { state: categoryIdsFormData, setState: setCategoryIdsFormData } = context;

  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>(categoryIdsFormData);

  const canClick = (chipValue: number) => {
    return (
      (!selectedCategoryIds.includes(chipValue) && selectedCategoryIds.length < MAX_SELECT_COUNT) ||
      (selectedCategoryIds.includes(chipValue) &&
        selectedCategoryIds.length === MAX_SELECT_COUNT) ||
      selectedCategoryIds.length < MAX_SELECT_COUNT
    );
  };

  const handleClickChip = (chipValue: number) => {
    if (!canClick(chipValue)) return;
    return selectedCategoryIds.includes(chipValue)
      ? setSelectedCategoryIds(selectedCategoryIds.filter((selected) => selected !== chipValue))
      : setSelectedCategoryIds([...selectedCategoryIds, chipValue]);
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
                  variant={
                    selectedCategoryIds.includes(categoryIdMap[category]) ? 'primary' : 'dimmed'
                  }
                  value={categoryIdMap[category]}
                  onClick={() => handleClickChip(categoryIdMap[category])}
                  disabled={!canClick(categoryIdMap[category])}
                >
                  {category}
                </Chip>
              ))}
            </Chip.Group>
          </FlexBox>
        }
      />
      <FixedBottomButton
        disabled={selectedCategoryIds.length < MIN_SELECT_COUNT}
        onClick={() => {
          onNext();
          setCategoryIdsFormData(selectedCategoryIds);
        }}
      >
        다음
      </FixedBottomButton>
    </>
  );
};
