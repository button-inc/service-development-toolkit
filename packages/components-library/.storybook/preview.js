import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ButtonTheme } from 'components-library-themes';
import { GovTheme } from 'components-library-themes';

const themes = [ButtonTheme, GovTheme];

export const decorators = [withThemesProvider(themes)];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
