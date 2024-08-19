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
    let nextIndex = index;

    if (newPinValue[index] && index < PIN.LENGTH - 1) {
      nextIndex = index + 1;
    }

    newPinValue[nextIndex] = newChar;
    onPinChange(newPinValue);
    focusInput(Math.min(nextIndex + 1, PIN.LENGTH - 1));
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
