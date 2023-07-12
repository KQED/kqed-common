/** @type { import('@storybook/react').Preview } */
import 'styles/_global.scss'
//add any additional global styles here for storybook support.

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
