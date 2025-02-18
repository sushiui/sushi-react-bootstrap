import type { Preview } from "@storybook/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/index.scss';
import '../src/styles/sushi-class.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
