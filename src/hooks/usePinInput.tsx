import { ChangeEvent, useRef } from 'react';

import { PIN } from '@/constants/pin';
import { englishAndNumberRegex } from '@/utils/regex';

import { Props } from '../components/common/PinInput/PinInput.types';

export const usePinInput = ({ value, onPinChange }: Props) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusInput = (index: number) => {
    if (index >= 0 && index < PIN.LENGTH) {
      inputRefs.current[index]?.focus();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newChar = e.target.value.slice(-1);

    if (!englishAndNumberRegex(newChar)) return;

    const newPinValue = [...value];
    newPinValue[index] = newChar;

    const nextIndex = index < PIN.LENGTH - 1 && newPinValue[index] ? index + 1 : index;
    onPinChange(newPinValue);
    focusInput(nextIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key !== 'Backspace') {
      return;
    }
    const newPinValue = [...value];

    if (newPinValue[index]) {
      newPinValue[index] = '';
      onPinChange(newPinValue);
      return;
    }

    if (index > 0) {
      newPinValue[index - 1] = '';
      onPinChange(newPinValue);
      focusInput(index - 1);
    }
  };

  return { inputRefs, focusInput, handleChange, handleKeyDown };
};
