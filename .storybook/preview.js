/** @type { import('@storybook/react').Preview } */

import '../src/styles/globals.css'; // add this line

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
