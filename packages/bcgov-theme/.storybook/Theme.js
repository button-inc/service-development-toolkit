import { create } from '@storybook/theming';
import btnLogo from './images/button-logo-beta.png';

export default create({
  base: 'light',
  brandTitle: 'Component Library',
  brandUrl: 'https://button.is',
  brandImage: btnLogo,
  fontBase: '"Open Sans", sans-serif',
});
