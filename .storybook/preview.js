/** @type { import('@storybook/react').Preview } */
// kqed-main-site stylesheets
import 'globalStyles/kqed-main-site/_base.scss'
import 'globalStyles/kqed-main-site/core.scss'
import 'globalStyles/kqed-main-site/_fonts.scss'
import 'globalStyles/kqed-main-site/_mixins.scss'
import 'globalStyles/kqed-main-site/_fontsV2.scss'

// youth-media stylesheet
import 'globalStyles/youth-media/_index.scss'

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
