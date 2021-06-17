import { DocsContainer } from '@storybook/addon-docs/blocks';
import BCGovTypography from '../stories/BCGovTypography';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  previewTabs: { 'storybook/docs/panel': { index: -1, title: 'Documentation' }, canvas: { title: 'Code' } },
  viewMode: 'docs',
  docs: {
    container: ({ children, context }) => {
      const isStory = context.kind.startsWith('Component');
      return (
        <DocsContainer context={context}>
          {isStory && <h4 className="docs-title">component</h4>}
          {children}
          {isStory && (
            <>
              <h3 className="sbdocs sbdocs-h3">Help us improve!</h3>
              <p className="sbdocs sbdocs-p">
                If you are running into an issue, please{' '}
                <a href="https://github.com/button-inc/service-development-toolkit/issues">open a github issue</a>.
              </p>
            </>
          )}
        </DocsContainer>
      );
    },
  },
};

export const decorators = [
  Story => (
    <>
      <BCGovTypography />
      <Story />
    </>
  ),
];
