// .storybook/manager.js

import { addons } from '@storybook/addons';
import theme from './Theme';
import favicon from './images/favicon-32x32.png';

addons.setConfig({
  theme,
});

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);
