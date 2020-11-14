import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ButtonTheme } from '../themes/ButtonTheme';
import { GovTheme } from '../themes/GovTheme';

const themes = [ButtonTheme, GovTheme];

export const decorators = [withThemesProvider(themes)];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
