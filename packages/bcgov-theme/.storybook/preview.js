import BCGovTypography from '../stories/BCGovTypography';
import 'happo-plugin-storybook/register';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
};

export const decorators = [
  Story => (
    <>
      <BCGovTypography />
      <Story />
    </>
  ),
];
