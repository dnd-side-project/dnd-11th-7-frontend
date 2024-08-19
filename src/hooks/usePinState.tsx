import { useState } from 'react';

import { PIN } from '@/constants/pin';

export const usePinState = () => {
  const [pin, setPin] = useState<string[]>(Array(PIN.LENGTH).fill(''));

  return { pin, setPin };
};
