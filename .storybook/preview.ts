import type { Preview } from '@storybook/react';

import '../src/index.css';
import { colors } from '../src/styles/global';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [{ name: 'light', value: colors.GY6 }],
    },
  },
};

export default preview;
