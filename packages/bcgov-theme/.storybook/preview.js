import BCGovTypography from '../stories/BCGovTypography';

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
