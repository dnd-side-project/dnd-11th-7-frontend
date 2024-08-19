import { ChangeEvent, useRef } from 'react';

import { PIN } from '@/constants/pin';
import { englishAndNumberRegex } from '@/utils/regex';

import { Props } from '../components/common/PinInput/PinInput.types';

export const usePinInput = ({ value, onPinChange }: Props) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;

    if (!englishAndNumberRegex(inputValue)) {
      return;
    }
    const newPinValue = [...value];
    newPinValue[index] = inputValue;
    onPinChange(newPinValue);

    if (inputValue.length === 1 && index < PIN.LENGTH - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key !== 'Backspace') {
      return;
    }
    const newPinValue = [...value];
    if (newPinValue[index]) {
      newPinValue[index] = '';
      onPinChange(newPinValue);
    } else if (index > 0) {
      focusInput(index - 1);
    }
  };

  return { inputRefs, focusInput, handleChange, handleKeyDown };
};
