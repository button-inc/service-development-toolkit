import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import themesObj from '../themes/index';

const { ButtonTheme, GovTheme } = themesObj;

const themes = [ButtonTheme, GovTheme];

export const decorators = [withThemesProvider(themes)];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
