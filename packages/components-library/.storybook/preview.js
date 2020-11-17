import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import themesObj from 'components-library-themes';

const { ButtonTheme, GovTheme } = themesObj.default;

const themes = [ButtonTheme, GovTheme];

export const decorators = [withThemesProvider(themes)];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
